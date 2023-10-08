import React from 'react'
import Navbar from '../../components/common/Navbar'
import Header from '../../components/common/Header'
import DeleteIcon from '@mui/icons-material/Delete'
import { Button } from '@mui/material'
import Footer from '../../components/common/Footer'
export default function Cart() {
    return (
        <div className="relative ">
            <div className="mt-5 px-40 py-5 mx-64  bg-white">
                <h2 className="block text-center py-5">
                    <span className="text-4xl border-b-2 border-yellow-300 ">Giỏ hàng</span>
                </h2>

                <table className="w-full border-2 border-slate-200">
                    <tr className=" bg-slate-300">
                        <th className="py-3 px-3 text-left">Ảnh </th>
                        <th className="py-3 text-left">Tên sản phẩm </th>
                        <th className="py-3 text-left">Giá / sản phẩm </th>
                        <th className="py-3 text-left">số lượng </th>
                        <th className="py-3 text-left">Tổng cộng </th>
                        <th className="py-3 pr-3 text-left">xóa</th>
                    </tr>
                    <tr>
                        <td>
                            <img
                                className="h-full w-32  rounded-md"
                                src={'https://longchim.vn/wp-content/uploads/2023/05/long-cu-gay-qua-dao-02-1.jpg'}
                            />
                        </td>
                        <td>
                            <div>Lồng Trần Cu Gáy Tre Già + Kèm Xích Chân</div>
                        </td>
                        <td>
                            <div>1.000.000đ</div>
                        </td>
                        <td>1</td>
                        <td>1.000.000đ</td>
                        <td>
                            <Button>
                                <DeleteIcon />
                            </Button>
                        </td>
                    </tr>
                </table>
                <div className="flex items-end flex-col">
                    <div>
                        <div className="text-xl font-bold my-2">Tổng cộng </div>
                        <table>
                            <tr className="bg-slate-200">
                                <td className="p-4">Tạm tính </td>
                                <td className="p-4">1.000.000₫</td>
                            </tr>
                            <tr>
                                <td className="p-4">Phí vận chuyển </td>
                                <td className="p-4"> Tính khi thanh toán</td>
                            </tr>
                            <tr className="bg-slate-200">
                                <td className="p-4">Thuế</td>
                                <td className="p-4"> Tính khi thanh toán</td>
                            </tr>
                            <tr>
                                <td className="p-4">Tổng Cộng</td>
                                <td className="p-4">1.420.000₫</td>
                            </tr>
                        </table>
                        <Button variant="contained">TIẾN HÀNH THANH TOÁN</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
