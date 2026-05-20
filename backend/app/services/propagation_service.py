from collections import defaultdict


class PropagationService:

    def build_dependency_map(
        self,
        relationships
    ):

        graph = defaultdict(list)

        for rel in relationships:

            graph[rel["source"]].append({
                "target": rel["target"],
                "relationship": rel["label"]
            })

        return graph

    def trace_propagation(
        self,
        relationships,
        starting_node
    ):

        graph = self.build_dependency_map(
            relationships
        )

        visited = set()

        propagation_chain = []

        def dfs(node):

            if node in visited:
                return

            visited.add(node)

            for edge in graph.get(node, []):

                propagation_chain.append({
                    "source": node,
                    "target": edge["target"],
                    "relationship": edge["relationship"]
                })

                dfs(edge["target"])

        dfs(starting_node)

        return propagation_chain