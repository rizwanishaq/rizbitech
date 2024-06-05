"use client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import data from "@/data/analytics"
const AnalyticsChart = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>
            Analytics For This Year
            <CardDescription>Views Per Month</CardDescription>
          </CardTitle>
        </CardHeader>
        <CardContent>
            <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
                <LineChart width={1100} height={300} data={data}>
                    <Line type='monotone' dataKey='uv' stroke="#8884d8" activeDot={{ r: 8 }}/>
                    <Line type='monotone' dataKey='pv' stroke="#82ca9d"/>
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey='name'/>
                    <YAxis />
                    <Tooltip />
          <Legend />
                </LineChart>
            </ResponsiveContainer>
            </div>
        </CardContent>
      </Card>
    </>
  );
};

export default AnalyticsChart;
