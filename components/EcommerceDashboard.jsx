import { TrendingUp, TrendingDown } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Line,
  LineChart,
  Pie,
  PieChart,
  Cell,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export default function EcommerceDashboard() {
  const statsCards = [
    {
      title: "Customers",
      value: "3,781",
      change: "+11.01%",
      isPositive: true,
      bgColor: "bg-[#E3F5FF] dark:bg-[#E3F5FF]",
      titleColor: "text-gray-900 dark:text-black",
      valueColor: "text-gray-900 dark:text-black",
    },
    {
      title: "Orders",
      value: "1,219",
      change: "-0.03%",
      isPositive: false,
      bgColor:
        "bg-[#F7F9FB] border border-gray-100 dark:bg-[#282828] dark:border-0",
      titleColor: "text-gray-900 dark:text-gray-300 hover:text-black",
      valueColor: "text-gray-900 dark:text-white",
    },
    {
      title: "Revenue",
      value: "$695",
      change: "+15.03%",
      isPositive: true,
      bgColor:
        "bg-[#F7F9FB] border border-gray-100 dark:bg-[#282828] dark:border-0",
      titleColor: "text-gray-900 dark:text-gray-300",
      valueColor: "text-gray-900 dark:text-white",
    },
    {
      title: "Growth",
      value: "30.1%",
      change: "+6.08%",
      isPositive: true,
      bgColor: "bg-[#E5ECF6] dark:bg-[#E3F5FF]",
      titleColor: "text-gray-900 dark:text-black",
      valueColor: "text-gray-900 dark:text-black",
    },
  ];

  const projectionsData = [
    { month: "Jan", actuals: 5, projections: 16 },
    { month: "Feb", actuals: 6, projections: 21 },
    { month: "Mar", actuals: 7, projections: 18 },
    { month: "Apr", actuals: 6, projections: 23 },
    { month: "May", actuals: 3, projections: 16 },
    { month: "Jun", actuals: 7, projections: 21 },
  ];

  const barChartConfig = {
    projections: {
      label: "Projections",
      color: "#A8C5DA",
    },
    actuals: {
      label: "Actuals",
      color: "#C9D8E4",
    },
  };

  const revenueData = [
    { month: "Jan", current: 12, previous: 10 },
    { month: "Feb", current: 10, previous: 16 },
    { month: "Mar", current: 11, previous: 15 },
    { month: "Apr", current: 15, previous: 12 },
    { month: "May", current: 21, previous: 14 },
    { month: "Jun", current: 22, previous: 23 },
  ];

  const lineChartConfig = {
    current: {
      label: "Current Week",
      color: "#000000 dark:#A8C5DA",
    },
    previous: {
      label: "Previous Week",
      color: "#A8C5DA",
    },
  };

  const topProducts = [
    {
      name: "ASOS Ridley High Waist",
      price: "$79.49",
      quantity: 82,
      amount: "$6,518.18",
    },
    {
      name: "Marco Lightweight Shirt",
      price: "$128.50",
      quantity: 37,
      amount: "$4,754.50",
    },
    {
      name: "Half Sleeve Shirt",
      price: "$39.99",
      quantity: 64,
      amount: "$2,559.36",
    },
    {
      name: "Lightweight Jacket",
      price: "$20.00",
      quantity: 184,
      amount: "$3,680.00",
    },
    { name: "Marco Shoes", price: "$79.49", quantity: 64, amount: "$1,965.81" },
  ];

  const locationData = [
    { city: "New York", value: "72K" },
    { city: "San Francisco", value: "39K" },
    { city: "Sydney", value: "25K" },
    { city: "Singapore", value: "61K" },
  ];

  const salesData = [
    { name: "Direct", value: 300.56, fill: "#1C1C1C" },
    { name: "Affiliate", value: 135.18, fill: "#BAEDBD" },
    { name: "Sponsored", value: 154.02, fill: "#95A4FC" },
    { name: "E-mail", value: 48.96, fill: "#B1E3FF" },
  ];

  const pieChartConfig = {
    value: {
      label: "Sales",
    },
    Direct: {
      label: "Direct",
      color: "#1f2937",
    },
    Affiliate: {
      label: "Affiliate",
      color: "#86EFAC",
    },
    Sponsored: {
      label: "Sponsored",
      color: "#60A5FA",
    },
    "E-mail": {
      label: "E-mail",
      color: "#67E8F9",
    },
  };

  return (
    <div className="p-3 sm:p-4 md:p-6 bg-white dark:bg-[#1C1C1C] min-h-screen pb-16">
      <h1 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-900 dark:text-gray-50">
        eCommerce
      </h1>

      <div className="flex flex-col lg:flex-row w-full gap-4 sm:gap-6 mb-4 sm:mb-6">
        {/* Stat Cards */}
        <div className="flex flex-col gap-4 sm:gap-6 lg:w-[50%] w-full">
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {statsCards.slice(0, 2).map((card, index) => (
              <div
                key={index}
                className={`${card.bgColor} dark:bg-[#282828]  dark:border-0 rounded-xl sm:rounded-2xl p-4 sm:p-6 group cursor-pointer flex flex-col h-full lg:h-[9.5rem]`}
              >
                <div
                  className={`text-sm sm:text-lg font-semibold ${card.titleColor} mb-2`}
                >
                  {card.title}
                </div>
                <div className="flex items-center justify-between gap-2 sm:gap-4 mt-auto">
                  <div
                    className={`text-2xl sm:text-3xl font-semibold ${card.valueColor} group-hover:hidden`}
                  >
                    {card.value}
                  </div>
                  <div
                    className={`text-xs sm:text-sm flex items-center gap-1 group-hover:hidden ${
                      card.isPositive
                        ? "text-green-600 dark:text-green-600"
                        : "text-red-600 dark:text-red-600"
                    }`}
                  >
                    <span>{card.change}</span>
                    {card.isPositive ? (
                      <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                    ) : (
                      <TrendingDown className="w-3 h-3 sm:w-4 sm:h-4" />
                    )}
                  </div>
                  <div
                    className={`hidden group-hover:flex text-xs sm:text-sm items-center gap-1 ${
                      card.isPositive
                        ? "text-green-600 dark:text-green-600"
                        : "text-red-600 dark:text-red-600"
                    }`}
                  >
                    <span>{card.change}</span>
                    {card.isPositive ? (
                      <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                    ) : (
                      <TrendingDown className="w-3 h-3 sm:w-4 sm:h-4" />
                    )}
                  </div>
                  <div
                    className={`hidden group-hover:block text-2xl sm:text-3xl font-semibold ${card.valueColor}`}
                  >
                    {card.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {statsCards.slice(2, 4).map((card, index) => (
              <div
                key={index}
                className={`${card.bgColor} dark:bg-[#282828]  dark:border-0 rounded-xl sm:rounded-2xl p-4 sm:p-6 group cursor-pointer flex flex-col h-full lg:h-[9.5rem]`}
              >
                <div
                  className={`text-sm sm:text-lg font-semibold ${card.titleColor} mb-2`}
                >
                  {card.title}
                </div>
                <div className="flex items-center justify-between gap-2 sm:gap-4 mt-auto">
                  <div
                    className={`text-2xl sm:text-3xl font-semibold ${card.valueColor} group-hover:hidden`}
                  >
                    {card.value}
                  </div>
                  <div
                    className={`text-xs sm:text-sm flex items-center gap-1 group-hover:hidden ${
                      card.isPositive
                        ? "text-green-600 dark:text-green-600"
                        : "text-red-600 dark:text-red-600"
                    }`}
                  >
                    <span>{card.change}</span>
                    {card.isPositive ? (
                      <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                    ) : (
                      <TrendingDown className="w-3 h-3 sm:w-4 sm:h-4" />
                    )}
                  </div>
                  <div
                    className={`hidden group-hover:flex text-xs sm:text-sm items-center gap-1 ${
                      card.isPositive
                        ? "text-green-600 dark:text-green-600"
                        : "text-red-600 dark:text-red-600"
                    }`}
                  >
                    <span>{card.change}</span>
                    {card.isPositive ? (
                      <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                    ) : (
                      <TrendingDown className="w-3 h-3 sm:w-4 sm:h-4" />
                    )}
                  </div>
                  <div
                    className={`hidden group-hover:block text-2xl sm:text-3xl font-semibold ${card.valueColor}`}
                  >
                    {card.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projections vs Actuals Chart */}
        <div className="bg-[#F7F9FB] dark:bg-[#282828]  rounded-xl sm:rounded-2xl p-4 border border-gray-200 dark:border-0 lg:w-[50%] w-full h-full">
          <h2 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-50 mb-4 sm:mb-6">
            Projections vs Actuals
          </h2>
          <ChartContainer config={barChartConfig} className="h-48 sm:h-64">
            <BarChart data={projectionsData}>
              <CartesianGrid vertical={false} stroke="#374151" />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tick={{ fill: "#9CA3AF", fontSize: 10 }}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{ fill: "#9CA3AF", fontSize: 10 }}
                tickFormatter={(value) => `${value}M`}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar
                dataKey="projections"
                stackId="a"
                fill="#A8C5DA"
                radius={[0, 0, 0, 0]}
              />
              <Bar
                dataKey="actuals"
                stackId="a"
                fill="#C9D8E4"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ChartContainer>
        </div>
      </div>

      {/* Revenue Chart and Location */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
        {/* Revenue Line Chart */}
        <div className="lg:col-span-2 bg-[#F7F9FB] dark:bg-[#282828]  rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200 dark:border-0">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-4">
            <h2 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-50">
              Revenue
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gray-900 dark:bg-gray-50 rounded-full"></div>
                <span className="text-gray-600 dark:text-gray-400">
                  Current Week
                </span>
                <span className="font-semibold text-gray-900 dark:text-gray-50">
                  $58,211
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#A8C5DA] rounded-full"></div>
                <span className="text-gray-600 dark:text-gray-400">
                  Previous Week
                </span>
                <span className="font-semibold text-gray-900 dark:text-gray-50">
                  $68,768
                </span>
              </div>
            </div>
          </div>
          <ChartContainer
            config={lineChartConfig}
            className="h-48 sm:h-64 w-full"
          >
            <LineChart data={revenueData}>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#374151"
              />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tick={{ fill: "#9CA3AF", fontSize: 10 }}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{ fill: "#9CA3AF", fontSize: 10 }}
                tickFormatter={(value) => `${value}M`}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line
                type="natural"
                dataKey="previous"
                stroke="#A8C5DA"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="natural"
                dataKey="current"
                stroke="#000000"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </div>

        {/* Revenue by Location */}
        <div className="lg:col-span-1 bg-[#F7F9FB] dark:bg-[#282828]  rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200 dark:border-0">
          <h2 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-50 mb-4 sm:mb-6">
            Revenue by Location
          </h2>
          {/* World Map Placeholder */}
          <div className="relative h-32 sm:h-40 mb-4 sm:mb-6 bg-gray-50 dark:bg-[#282828] rounded-lg flex items-center justify-center">
            <img src="/map.png" className="w-full h-full" />
          </div>
          {/* Location List */}
          <div className="space-y-3 sm:space-y-4">
            {locationData.map((location, index) => {
              const maxValue = Math.max(
                ...locationData.map((l) => Number.parseInt(l.value))
              );
              const percentage = (Number.parseInt(location.value) / 100) * 100;

              return (
                <div key={index}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs sm:text-sm text-gray-900 dark:text-gray-50">
                      {location.city}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-gray-50">
                      {location.value}
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 dark:bg-slate-700 rounded-full h-1">
                    <div
                      className="bg-[#C9D8E4] h-1 rounded-full transition-all duration-300"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Top Selling Products */}
        <div className="lg:col-span-2 bg-[#F7F9FB] dark:bg-[#282828]  rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200 dark:border-0">
          <h2 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-50 mb-4 sm:mb-6">
            Top Selling Products
          </h2>
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <div className="inline-block min-w-full align-middle px-4 sm:px-0">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-slate-700">
                    <th className="text-left text-xs font-medium text-gray-500 dark:text-gray-400 pb-3 pr-3">
                      Name
                    </th>
                    <th className="text-left text-xs font-medium text-gray-500 dark:text-gray-400 pb-3 px-2">
                      Price
                    </th>
                    <th className="text-left text-xs font-medium text-gray-500 dark:text-gray-400 pb-3 px-2">
                      Qty
                    </th>
                    <th className="text-left text-xs font-medium text-gray-500 dark:text-gray-400 pb-3 pl-2">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {topProducts.map((product, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 dark:border-slate-700 last:border-0"
                    >
                      <td className="py-3 sm:py-4 text-xs sm:text-sm text-gray-900 dark:text-gray-50 pr-3">
                        {product.name}
                      </td>
                      <td className="py-3 sm:py-4 text-xs sm:text-sm text-gray-900 dark:text-gray-50 px-2">
                        {product.price}
                      </td>
                      <td className="py-3 sm:py-4 text-xs sm:text-sm text-gray-900 dark:text-gray-50 px-2">
                        {product.quantity}
                      </td>
                      <td className="py-3 sm:py-4 text-xs sm:text-sm text-gray-900 dark:text-gray-50 pl-2">
                        {product.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Total Sales */}
        <div className="lg:col-span-1 bg-[#F7F9FB] dark:bg-[#282828]  rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200 dark:border-0">
          <h2 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-50 mb-4 sm:mb-6">
            Total Sales
          </h2>
          <ChartContainer
            config={pieChartConfig}
            className="h-48 sm:h-64 w-full"
          >
            <PieChart>
              <ChartTooltip content={<ChartTooltipContent />} />
              <Pie
                data={salesData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={70}
                paddingAngle={5}
                cornerRadius={7}
                dataKey="value"
              >
                {salesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} radius={4} />
                ))}
              </Pie>
            </PieChart>
          </ChartContainer>
          {/* Sales Legend */}
          <div className="space-y-2 sm:space-y-3 mt-4">
            {salesData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full`}
                    style={{ backgroundColor: item.fill }}
                  ></div>
                  <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    {item.name}
                  </span>
                </div>
                <span className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-gray-50">
                  ${item.value.toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
