"use client";

import { useEffect, useState } from "react";

import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  MarkerType
} from "reactflow";

import "reactflow/dist/style.css";

import api from "@/services/api";

export default function GraphView() {

  const [nodes, setNodes] = useState<any[]>([]);
  const [edges, setEdges] = useState<any[]>([]);

  useEffect(() => {
    fetchGraph();
  }, []);

  const getNodeColor = (
    type: string
  ) => {

    switch (type) {

      case "Vendor":
        return "#2563eb";

      case "System":
        return "#7c3aed";

      case "BusinessMetric":
        return "#16a34a";

      case "Risk":
        return "#dc2626";

      default:
        return "#374151";
    }
  };

  const fetchGraph = async () => {

    try {

      const response = await api.get(
        "/graph"
      );

      const graphNodes =
        response.data.nodes.map(
          (
            node: any,
            index: number
          ) => ({

            id: node.id,

            data: {
              label: node.label
            },

            position: {
              x: 250 * (index % 3),
              y:
                180 *
                Math.floor(index / 3)
            },

            style: {

              background:
                getNodeColor(
                  node.type
                ),

              color: "white",

              border:
                "1px solid rgba(255,255,255,0.15)",

              borderRadius: "16px",

              padding: 12,

              width: 200,

              fontSize: 14,

              fontWeight: 600,

              boxShadow:
                "0 0 25px rgba(0,0,0,0.35)"
            }
          }))
        ;

      const graphEdges =
        response.data.edges.map(
          (
            edge: any,
            index: number
          ) => ({

            id: `edge-${index}`,

            source: edge.source,

            target: edge.target,

            label: edge.label,

            animated: true,

            markerEnd: {
              type:
                MarkerType.ArrowClosed
            },

            style: {
              stroke: "#9ca3af",
              strokeWidth: 2
            },

            labelStyle: {
              fill: "#ffffff",
              fontSize: 12,
              fontWeight: 600
            }
          }))
        ;

      setNodes(graphNodes);

      setEdges(graphEdges);

    } catch (error) {

      console.error(
        "Graph loading failed:",
        error
      );

    }
  };

  return (
    <div className="
      h-[700px]
      bg-zinc-950
      rounded-2xl
      overflow-hidden
      border
      border-zinc-800
    ">

      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
      >

        <Background />

        <Controls />

        <MiniMap />

      </ReactFlow>

    </div>
  );
}