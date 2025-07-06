import { useState } from 'react'
import data from '../crypto_rates.json'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Legend,
  XAxis,
  YAxis,
} from 'recharts'

export default function ChartPanel() {
  const [period, setPeriod] = useState(12)

  const copyData = data.slice()
  const currentData = copyData.slice(period * -1)

  return (
    <ResponsiveContainer height={550}>
      <LineChart data={currentData}>
        <CartesianGrid />
        {/* <Line dataKey="rates.BTC" type="monotone" name="BTC" /> */}
        <Line dataKey="rates.ETH" type="monotone" name="ETH" stroke="#8884d8" />
        <Line dataKey="rates.SOL" type="monotone" name="SOL" stroke="#82ca9d" />
        <XAxis name="Date" dataKey="month" />
        <YAxis name="Currency" unit="€" />
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  )
}
