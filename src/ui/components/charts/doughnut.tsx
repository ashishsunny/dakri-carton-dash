import React, { useEffect, useRef } from 'react'
import {
  Chart,
  DoughnutController,
  ArcElement,
  Legend,
  Tooltip,
} from 'chart.js'
import 'chartjs-adapter-moment'

interface DoughnutChartProps {
  data: number[]
  labels: string[]
  centerLabel: string
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({
  data,
  labels,
  centerLabel,
}) => {
  const chartRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    Chart.register(DoughnutController, ArcElement, Legend, Tooltip)

    const canvas = chartRef.current
    if (!canvas) return

    let chartInstance = Chart.getChart(canvas)
    if (chartInstance) {
      chartInstance.destroy()
    }

    const pastelColors = ['#60d394', '#ffd97d', '#ee6055']

    chartInstance = new Chart(canvas, {
      type: 'doughnut',
      data: {
        labels,
        datasets: [
          {
            data,
            backgroundColor: pastelColors,
          },
        ],
      },
      options: {
        responsive: false,
        aspectRatio: 1,
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
          },
          tooltip: {
            callbacks: {
              label: (context) => `${context.label}: ${context.formattedValue}`,
            },
          },
        },
      },
    })
  }, [data, labels])

  useEffect(() => {
    const chart = Chart.getChart(chartRef.current)
    if (!chart || !chart.options.animation) return

    chart.options.animation.onComplete = () => {
      const ctx = chartRef.current!.getContext('2d')!
      ctx.font = '12px Arial'
      ctx.textBaseline = 'middle'
      ctx.fillStyle = 'black'
      ctx.fillText(
        centerLabel,
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y
      )
    }

    chart.update()
  }, [centerLabel])

  return <canvas ref={chartRef} width={200} height={200} />
}

export default DoughnutChart
