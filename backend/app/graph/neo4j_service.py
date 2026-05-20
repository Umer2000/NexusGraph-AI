from neo4j import GraphDatabase

from app.core.config import settings


class Neo4jService:

    def __init__(self):

        self.driver = GraphDatabase.driver(
            settings.NEO4J_URI,
            auth=(
                settings.NEO4J_USERNAME,
                settings.NEO4J_PASSWORD
            )
        )

    def close(self):

        self.driver.close()

    async def create_graph_data(
        self,
        entities,
        relationships
    ):

        with self.driver.session() as session:

            # Create entity nodes

            for entity in entities:

                session.run(
                    """
                    MERGE (e:Entity {
                        name: $name,
                        type: $type
                    })
                    """,
                    name=entity.name,
                    type=entity.type
                )

            # Create relationships

            for rel in relationships:

                relationship_type = rel.relationship.replace(
                    " ",
                    "_"
                ).upper()

                query = f"""
                MATCH (a:Entity {{name: $source}})
                MATCH (b:Entity {{name: $target}})
                MERGE (a)-[r:{relationship_type}]->(b)
                """

                session.run(
                    query,
                    source=rel.source,
                    target=rel.target
                )

    async def get_graph_data(self):

        with self.driver.session() as session:

            result = session.run(
                """
                MATCH (a)-[r]->(b)
                RETURN a, r, b
                """
            )

            nodes = []
            edges = []

            node_ids = set()

            for record in result:

                source = record["a"]
                target = record["b"]
                relationship = record["r"]

                source_id = str(source.id)
                target_id = str(target.id)

                # Add source node

                if source_id not in node_ids:

                    nodes.append({
                        "id": source_id,
                        "label": source["name"],
                        "type": source.get("type", "Entity")
                    })

                    node_ids.add(source_id)

                # Add target node

                if target_id not in node_ids:

                    nodes.append({
                        "id": target_id,
                        "label": target["name"],
                        "type": target.get("type", "Entity")
                    })

                    node_ids.add(target_id)

                # Add relationship edge

                edges.append({
                    "source": source_id,
                    "target": target_id,
                    "label": relationship.type
                })

            return {
                "nodes": nodes,
                "edges": edges
            }