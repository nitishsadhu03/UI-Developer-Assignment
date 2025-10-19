"use client";
import { useState, useEffect } from "react";
import {
  Search,
  Plus,
  SlidersHorizontal,
  ArrowUpDown,
  Calendar,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Edit2,
  Trash2,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function OrderList() {
  const initialOrders = [
    {
      id: "#CM9801",
      user: "Natali Craig",
      project: "Landing Page",
      address: "Meadow Lane Oakland",
      date: "Just now",
      status: "In Progress",
      avatar: "/natali.png",
    },
    {
      id: "#CM9802",
      user: "Kate Morrison",
      project: "CRM Admin pages",
      address: "Larry San Francisco",
      date: "A minute ago",
      status: "Complete",
      avatar: "/kate.png",
    },
    {
      id: "#CM9803",
      user: "Drew Cano",
      project: "Client Project",
      address: "Bagwell Avenue Ocala",
      date: "1 hour ago",
      status: "Pending",
      avatar: "/drew.png",
    },
    {
      id: "#CM9804",
      user: "Orlando Diggs",
      project: "Admin Dashboard",
      address: "Washburn Baton Rouge",
      date: "Yesterday",
      status: "Approved",
      avatar: "/orlando.png",
    },
    {
      id: "#CM9805",
      user: "Andi Lane",
      project: "App Landing Page",
      address: "Nest Lane Olivette",
      date: "Feb 2, 2023",
      status: "Rejected",
      avatar: "/andi.png",
    },
    {
      id: "#CM9806",
      user: "Natali Craig",
      project: "Landing Page",
      address: "Meadow Lane Oakland",
      date: "Feb 3, 2023",
      status: "In Progress",
      avatar: "/natali.png",
    },
    {
      id: "#CM9807",
      user: "Kate Morrison",
      project: "CRM Admin pages",
      address: "Larry San Francisco",
      date: "Feb 4, 2023",
      status: "Complete",
      avatar: "/kate.png",
    },
    {
      id: "#CM9808",
      user: "Drew Cano",
      project: "Client Project",
      address: "Bagwell Avenue Ocala",
      date: "Feb 5, 2023",
      status: "Pending",
      avatar: "/drew.png",
    },
    {
      id: "#CM9809",
      user: "Orlando Diggs",
      project: "Admin Dashboard",
      address: "Washburn Baton Rouge",
      date: "Feb 6, 2023",
      status: "Approved",
      avatar: "/orlando.png",
    },
    {
      id: "#CM9810",
      user: "Andi Lane",
      project: "App Landing Page",
      address: "Nest Lane Olivette",
      date: "Feb 7, 2023",
      status: "Rejected",
      avatar: "/andi.png",
    },
    {
      id: "#CM9811",
      user: "Natali Craig",
      project: "Landing Page",
      address: "Meadow Lane Oakland",
      date: "Just now",
      status: "In Progress",
      avatar: "/natali.png",
    },
    {
      id: "#CM9812",
      user: "Kate Morrison",
      project: "CRM Admin pages",
      address: "Larry San Francisco",
      date: "A minute ago",
      status: "Complete",
      avatar: "/kate.png",
    },
    {
      id: "#CM9813",
      user: "Drew Cano",
      project: "Client Project",
      address: "Bagwell Avenue Ocala",
      date: "1 hour ago",
      status: "Pending",
      avatar: "/drew.png",
    },
    {
      id: "#CM9814",
      user: "Orlando Diggs",
      project: "Admin Dashboard",
      address: "Washburn Baton Rouge",
      date: "Yesterday",
      status: "Approved",
      avatar: "/orlando.png",
    },
    {
      id: "#CM9815",
      user: "Andi Lane",
      project: "App Landing Page",
      address: "Nest Lane Olivette",
      date: "Feb 2, 2023",
      status: "Rejected",
      avatar: "/andi.png",
    },
  ];

  const [allOrders, setAllOrders] = useState([]);
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [editingOrder, setEditingOrder] = useState(null);
  const [orderToDelete, setOrderToDelete] = useState(null);
  const [formData, setFormData] = useState({
    user: "",
    project: "",
    address: "",
    status: "Pending",
    avatar: "",
  });
  const itemsPerPage = 10;

  const statusColors = {
    "In Progress":
      "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30",
    Complete:
      "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30",
    Pending: "text-sky-500 dark:text-sky-400 bg-sky-50 dark:bg-sky-900/30",
    Approved:
      "text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/30",
    Rejected: "text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800",
  };

  useEffect(() => {
    const savedOrders = localStorage.getItem("orders");
    if (savedOrders) {
      setAllOrders(JSON.parse(savedOrders));
    } else {
      setAllOrders(initialOrders);
      localStorage.setItem("orders", JSON.stringify(initialOrders));
    }
  }, []);

  const filteredOrders = allOrders.filter((order) => {
    const query = searchQuery.toLowerCase();
    return (
      order.id.toLowerCase().includes(query) ||
      order.user.toLowerCase().includes(query) ||
      order.project.toLowerCase().includes(query) ||
      order.address.toLowerCase().includes(query) ||
      order.status.toLowerCase().includes(query)
    );
  });

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentOrders = filteredOrders.slice(startIndex, endIndex);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const toggleRow = (id) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedRows(newSelected);
  };

  const toggleAll = () => {
    if (selectedRows.size === currentOrders.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(currentOrders.map((_, i) => startIndex + i)));
    }
  };

  const goToPage = (page) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  const generateOrderId = () => {
    const orders = allOrders.length > 0 ? allOrders : initialOrders;
    const lastOrder = orders[orders.length - 1];
    const lastId = Number.parseInt(lastOrder.id.replace("#CM", ""));
    return `#CM${lastId + 1}`;
  };

  const getRelativeTime = () => {
    return "Just now";
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleStatusChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      status: value,
    }));
  };

  const handleEdit = (order) => {
    setEditingOrder(order);
    setFormData({
      user: order.user,
      project: order.project,
      address: order.address,
      status: order.status,
      avatar: order.avatar || "",
    });
    setIsDialogOpen(true);
    setOpenMenuIndex(null);
  };

  const handleDelete = (order) => {
    setOrderToDelete(order);
    setIsDeleteDialogOpen(true);
    setOpenMenuIndex(null);
  };

  const confirmDelete = () => {
    if (orderToDelete) {
      const updatedOrders = allOrders.filter(
        (order) => order.id !== orderToDelete.id
      );
      setAllOrders(updatedOrders);
      localStorage.setItem("orders", JSON.stringify(updatedOrders));
      setIsDeleteDialogOpen(false);
      setOrderToDelete(null);

      if (currentPage > Math.ceil(updatedOrders.length / itemsPerPage)) {
        setCurrentPage(1);
      }
    }
  };

  const handleSubmit = () => {
    if (!formData.user || !formData.project || !formData.address) {
      alert("Please fill in all required fields");
      return;
    }

    let updatedOrders;

    if (editingOrder) {
      // Edit existing order
      updatedOrders = allOrders.map((order) =>
        order.id === editingOrder.id
          ? {
              ...order,
              user: formData.user,
              project: formData.project,
              address: formData.address,
              status: formData.status,
              avatar: formData.avatar || null,
            }
          : order
      );
    } else {
      // Add new order
      const newOrder = {
        id: generateOrderId(),
        user: formData.user,
        project: formData.project,
        address: formData.address,
        date: getRelativeTime(),
        status: formData.status,
        avatar: formData.avatar || null,
      };
      updatedOrders = [...allOrders, newOrder];
    }

    setAllOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    setIsDialogOpen(false);
    resetForm();

    if (!editingOrder) {
      setCurrentPage(Math.ceil(updatedOrders.length / itemsPerPage));
    }
  };

  const resetForm = () => {
    setFormData({
      user: "",
      project: "",
      address: "",
      status: "Pending",
      avatar: "",
    });
    setEditingOrder(null);
  };

  const handleOpenDialog = () => {
    resetForm();
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    resetForm();
  };

  return (
    <div className="w-full min-h-screen bg-white dark:bg-[#1C1C1C] px-2 sm:px-4 py-4 sm:py-8 mb-12 border-t-2 dark:border-[#323232] pt-4 sm:pt-6">
      <div className="max-w-[1600px] mx-auto">
        <h1 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-8 px-2 dark:text-gray-50">
          Order List
        </h1>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-0 mb-4 sm:mb-6 bg-gray-100 dark:bg-[#282828] p-2 rounded-xl">
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleOpenDialog}
              className="p-2 hover:bg-gray-300 dark:hover:bg-[#1C1C1C] rounded-lg transition-colors"
            >
              <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button className="p-2 hover:bg-gray-300 dark:hover:bg-[#1C1C1C] rounded-lg transition-colors">
              <SlidersHorizontal className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button className="p-2 hover:bg-gray-300 dark:hover:bg-[#1C1C1C] rounded-lg transition-colors">
              <ArrowUpDown className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          <div className="relative w-full sm:w-auto">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearch}
              className="pl-10 pr-4 py-2 bg-white dark:bg-[#1C1C1C] border border-gray-200 dark:border-0 rounded-lg w-full sm:w-64 text-sm dark:text-gray-50 focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-gray-50"
            />
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block border border-gray-200 dark:border-[#1C1C1C] rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-[#1C1C1C] border-b border-gray-200 dark:border-[#282828]">
              <tr>
                <th className="w-12 px-6 py-3">
                  <input
                    type="checkbox"
                    checked={
                      currentOrders.length > 0 &&
                      selectedRows.size === currentOrders.length
                    }
                    onChange={toggleAll}
                    className="w-4 h-4 rounded-xl border-gray-300 accent-black"
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                  Project
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                  Address
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                  Status
                </th>
                <th className="w-12 px-6 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-[#282828]">
              {currentOrders.map((order, index) => {
                const globalIndex = startIndex + index;
                return (
                  <tr
                    key={globalIndex}
                    className={`hover:bg-gray-50 dark:hover:bg-[#282828] transition-colors ${
                      selectedRows.has(globalIndex)
                        ? "bg-gray-50 dark:bg-[#282828]"
                        : ""
                    }`}
                  >
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedRows.has(globalIndex)}
                        onChange={() => toggleRow(globalIndex)}
                        className="w-4 h-4 rounded-xl border-gray-300 accent-black"
                      />
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-50">
                      {order.id}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {order.avatar ? (
                          <img
                            src={order.avatar || "/placeholder.svg"}
                            className="w-8 h-8 rounded-full"
                            alt={order.user}
                          />
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-xs font-semibold text-white">
                            {getInitials(order.user)}
                          </div>
                        )}
                        <span className="text-sm text-gray-900 dark:text-gray-50">
                          {order.user}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-50">
                      {order.project}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        {order.address}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                        {order.date}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                          statusColors[order.status]
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 relative">
                      {selectedRows.has(globalIndex) && (
                        <>
                          <button
                            onClick={() =>
                              setOpenMenuIndex(
                                openMenuIndex === globalIndex
                                  ? null
                                  : globalIndex
                              )
                            }
                            className="p-1 hover:bg-gray-200 dark:hover:bg-[#1C1C1C] rounded transition-colors"
                          >
                            <MoreHorizontal className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                          </button>

                          {openMenuIndex === globalIndex && (
                            <>
                              <div
                                className="fixed inset-0 z-10"
                                onClick={() => setOpenMenuIndex(null)}
                              />
                              <div className="absolute right-0 top-full mt-1 w-36 bg-white dark:bg-[#282828] border border-gray-200 dark:border-0 rounded-lg shadow-lg z-20 py-1">
                                <button
                                  onClick={() => handleEdit(order)}
                                  className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#1C1C1C] flex items-center gap-2 transition-colors cursor-pointer"
                                >
                                  <Edit2 className="w-4 h-4" />
                                  Edit
                                </button>
                                <button
                                  onClick={() => handleDelete(order)}
                                  className="w-full px-4 py-2 text-left text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center gap-2 transition-colors cursor-pointer"
                                >
                                  <Trash2 className="w-4 h-4" />
                                  Delete
                                </button>
                              </div>
                            </>
                          )}
                        </>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="lg:hidden space-y-3">
          {currentOrders.map((order, index) => {
            const globalIndex = startIndex + index;
            return (
              <div
                key={globalIndex}
                className={`border border-gray-200 dark:border-[#282828] rounded-lg p-4 transition-colors ${
                  selectedRows.has(globalIndex)
                    ? "bg-gray-50 dark:bg-[#1C1C1C] border-gray-300 dark:border-[#282828]"
                    : "bg-white dark:bg-[#282828]"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={selectedRows.has(globalIndex)}
                      onChange={() => toggleRow(globalIndex)}
                      className="w-4 h-4 rounded-xl border-gray-300 accent-black mt-1"
                    />
                    <div className="flex items-center gap-3">
                      {order.avatar ? (
                        <img
                          src={order.avatar || "/placeholder.svg"}
                          className="w-10 h-10 rounded-full"
                          alt={order.user}
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-sm font-semibold text-white">
                          {getInitials(order.user)}
                        </div>
                      )}
                      <div>
                        <div className="text-sm font-medium text-gray-900 dark:text-gray-50">
                          {order.user}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {order.id}
                        </div>
                      </div>
                    </div>
                  </div>
                  {selectedRows.has(globalIndex) && (
                    <div className="relative">
                      <button
                        onClick={() =>
                          setOpenMenuIndex(
                            openMenuIndex === globalIndex ? null : globalIndex
                          )
                        }
                        className="p-1 hover:bg-gray-200 dark:hover:bg-[#282828] rounded transition-colors"
                      >
                        <MoreHorizontal className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      </button>

                      {openMenuIndex === globalIndex && (
                        <>
                          <div
                            className="fixed inset-0 z-10"
                            onClick={() => setOpenMenuIndex(null)}
                          />
                          <div className="absolute right-0 top-full mt-1 w-36 bg-white dark:bg-[#282828] border border-gray-200 dark:border-0 rounded-lg shadow-lg z-20 py-1">
                            <button
                              onClick={() => handleEdit(order)}
                              className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#282828] flex items-center gap-2 transition-colors"
                            >
                              <Edit2 className="w-4 h-4" />
                              Edit
                            </button>
                            <button
                              onClick={() => handleDelete(order)}
                              className="w-full px-4 py-2 text-left text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center gap-2 transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                              Delete
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </div>

                <div className="space-y-2 pl-7">
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                      Project
                    </div>
                    <div className="text-sm text-gray-900 dark:text-gray-50">
                      {order.project}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                      Address
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {order.address}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                        Date
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Calendar className="w-3 h-3 text-gray-400 dark:text-gray-500" />
                        {order.date}
                      </div>
                    </div>
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                        statusColors[order.status]
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                      {order.status}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* No results message */}
        {filteredOrders.length === 0 && (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400 text-sm sm:text-base">
            No orders found matching your search.
          </div>
        )}

        {/* Pagination */}
        {filteredOrders.length > 0 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4 sm:mt-6">
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 order-2 sm:order-1">
              Showing {startIndex + 1} to{" "}
              {Math.min(endIndex, filteredOrders.length)} of{" "}
              {filteredOrders.length} orders
            </div>
            <div className="flex items-center gap-1 sm:gap-2 order-1 sm:order-2">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-1.5 sm:p-2 hover:bg-gray-100 dark:hover:bg-[#282828] rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <div className="flex items-center gap-1 overflow-x-auto max-w-[200px] sm:max-w-none">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg transition-colors text-sm sm:text-base flex-shrink-0 ${
                        currentPage === page
                          ? "bg-gray-900 dark:bg-[#282828] text-white"
                          : "hover:bg-gray-100 dark:hover:bg-[#282828] text-black dark:text-gray-50"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}
              </div>
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-1.5 sm:p-2 hover:bg-gray-100 dark:hover:bg-[#282828] rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Add/Edit Order Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px] dark:bg-[#1C1C1C]">
          <DialogHeader>
            <DialogTitle className="dark:text-gray-50">
              {editingOrder ? "Edit Order" : "Add New Order"}
            </DialogTitle>
            <DialogDescription className="dark:text-gray-400">
              {editingOrder
                ? "Update the order details below."
                : "Fill in the details to create a new order. Order ID will be generated automatically."}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <label
                htmlFor="user"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                User Name <span className="text-red-500">*</span>
              </label>
              <input
                id="user"
                name="user"
                type="text"
                value={formData.user}
                onChange={handleInputChange}
                placeholder="Enter user name"
                className="w-full px-3 py-2 border border-gray-300 dark:border-0 rounded-lg bg-white dark:bg-[#282828] dark:text-gray-50 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-gray-50"
              />
            </div>

            <div className="grid gap-2">
              <label
                htmlFor="project"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Project <span className="text-red-500">*</span>
              </label>
              <input
                id="project"
                name="project"
                type="text"
                value={formData.project}
                onChange={handleInputChange}
                placeholder="Enter project name"
                className="w-full px-3 py-2 border border-gray-300 dark:border-0 rounded-lg bg-white dark:bg-[#282828] dark:text-gray-50 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-gray-50"
              />
            </div>

            <div className="grid gap-2">
              <label
                htmlFor="address"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Address <span className="text-red-500">*</span>
              </label>
              <input
                id="address"
                name="address"
                type="text"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter address"
                className="w-full px-3 py-2 border border-gray-300 dark:border-0 rounded-lg bg-white dark:bg-[#282828] dark:text-gray-50 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-gray-50"
              />
            </div>

            <div className="grid gap-2">
              <label
                htmlFor="status"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Status <span className="text-red-500">*</span>
              </label>
              <Select
                value={formData.status}
                onValueChange={handleStatusChange}
              >
                <SelectTrigger className="w-full dark:bg-[#282828] dark:border-0 dark:text-gray-50">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent className="dark:bg-[#282828] dark:border-0">
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="In Progress">In Progress</SelectItem>
                  <SelectItem value="Complete">Complete</SelectItem>
                  <SelectItem value="Approved">Approved</SelectItem>
                  <SelectItem value="Rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <label
                htmlFor="avatar"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Avatar URL (Optional)
              </label>
              <input
                id="avatar"
                name="avatar"
                type="text"
                value={formData.avatar}
                onChange={handleInputChange}
                placeholder="Enter avatar image URL (leave empty for initials)"
                className="w-full px-3 py-2 border border-gray-300 dark:border-0 rounded-lg bg-white dark:bg-[#282828] dark:text-gray-50 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-gray-50"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400">
                If no URL is provided, user initials will be displayed
              </p>
            </div>
          </div>

          <DialogFooter>
            <button
              type="button"
              onClick={handleCloseDialog}
              className="px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-red-500 dark:hover:bg-red-600 hover:text-white transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="px-4 py-2 bg-green-600 dark:bg-green-700 text-white rounded-lg text-sm font-medium hover:bg-green-500 dark:hover:bg-green-600 transition-colors cursor-pointer"
            >
              {editingOrder ? "Update Order" : "Add Order"}
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[400px] dark:bg-[#1C1C1C1]">
          <DialogHeader>
            <DialogTitle className="dark:text-gray-50">
              Confirm Delete
            </DialogTitle>
            <DialogDescription className="dark:text-gray-400">
              Are you sure you want to delete order{" "}
              <strong>{orderToDelete?.id}</strong> for{" "}
              <strong>{orderToDelete?.user}</strong>? This action cannot be
              undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <button
              type="button"
              onClick={() => setIsDeleteDialogOpen(false)}
              className="px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#282828] transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={confirmDelete}
              className="px-4 py-2 bg-red-600 dark:bg-red-700 text-white rounded-lg text-sm font-medium hover:bg-red-500 dark:hover:bg-red-600 transition-colors cursor-pointer"
            >
              Delete Order
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
