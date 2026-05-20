"use client";

import { useEffect, useState } from "react";

import api from "@/services/api";

import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";

import GraphView from "@/components/GraphView";
import UploadPanel from "@/components/UploadPanel";
import AIAnalyst from "@/components/AIAnalyst";
import RiskPanel from "@/components/RiskPanel";
import AlertFeed from "@/components/AlertFeed";

import LiveMetrics from "@/components/LiveMetrics";
import LiveIncidentFeed from "@/components/LiveIncidentFeed";

export default function DashboardPage() {

  const [insights, setInsights] =
    useState("");

  useEffect(() => {
    fetchInsights();
  }, []);

  const fetchInsights = async () => {

    try {

      const response = await api.post(
        "/generate-insights",
        {
          data: `
CloudPay infrastructure outage detected.
Payment API latency increased significantly.
Checkout transaction failures increased by 37%.
Support ticket escalation volume increased by 42%.
Revenue risk alerts triggered for e-commerce operations.
`
        }
      );

      setInsights(
        response.data.insights
      );

    } catch (error) {

      console.error(error);

      setInsights(
        "AI operational insights temporarily unavailable."
      );

    }
  };

  return (
    <main className="
      min-h-screen
      bg-black
      text-white
    ">

      {/* Sidebar */}

      <Sidebar />

      {/* Main Content */}

      <div className="
        ml-72
        p-10
      ">

        {/* Top Navigation */}

        <TopBar />

        {/* Live Metrics */}

        <LiveMetrics />

        {/* Executive AI Insights */}

        <div className="
          bg-zinc-900
          border
          border-zinc-800
          rounded-3xl
          p-8
          mb-10
        ">

          <div className="
            flex
            items-center
            justify-between
            mb-5
          ">

            <div>

              <h2 className="
                text-2xl
                font-semibold
              ">
                Executive AI Insights
              </h2>

              <p className="
                text-zinc-400
                mt-1
              ">
                Gemini-powered operational intelligence analysis
              </p>

            </div>

            <div className="
              flex
              items-center
              gap-2
              text-green-400
              text-sm
            ">

              <div className="
                w-2
                h-2
                rounded-full
                bg-green-500
                animate-pulse
              " />

              Live Analysis

            </div>

          </div>

          <div className="
            text-zinc-300
            whitespace-pre-wrap
            leading-8
          ">

            {insights ||
              "Generating operational insights..."}

          </div>

        </div>

        {/* Workspace Grid */}

        <div className="
          grid
          grid-cols-1
          xl:grid-cols-2
          gap-8
          mb-10
        ">

          {/* Left Column */}

          <div>

            <UploadPanel />

            <RiskPanel />

          </div>

          {/* Right Column */}

          <div>

            <AlertFeed />

            <LiveIncidentFeed />

            <AIAnalyst />

          </div>

        </div>

        {/* Intelligence Graph */}

        <div className="
          bg-zinc-900
          border
          border-zinc-800
          rounded-3xl
          p-8
        ">

          <div className="
            flex
            items-center
            justify-between
            mb-6
          ">

            <div>

              <h2 className="
                text-3xl
                font-semibold
              ">
                Operational Intelligence Graph
              </h2>

              <p className="
                text-zinc-400
                mt-1
              ">
                Real-time enterprise dependency mapping
              </p>

            </div>

            <div className="
              flex
              items-center
              gap-2
              text-sm
              text-green-400
            ">

              <div className="
                w-2
                h-2
                rounded-full
                bg-green-500
                animate-pulse
              " />

              Live Graph Sync

            </div>

          </div>

          <GraphView />

        </div>

      </div>

    </main>
  );
}