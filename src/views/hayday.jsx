import { useState } from 'react'
import Bolt from '@/assets/image/Bolt.webp'
import Plank from '@/assets/image/Plank.webp'
import Duct_Tape from '@/assets/image/Duct_Tape.webp'

import Nail from '@/assets/image/Nail.webp'
import Screw from '@/assets/image/Screw.webp'
import Wood_Panel from '@/assets/image/Wood_Panel.webp'
const MATERIAL_MAP = {
    warehouse: [
        {
            name: '螺栓',
            img: Bolt,
        },
        {
            name: '木板',
            img: Plank,
        },
        {
            name: '胶带',
            img: Duct_Tape,
        },
    ],
    barn: [
        {
            name: '盒钉',
            img: Nail,
        },
        {
            name: '螺钉',
            img: Screw,
        },
        {
            name: '镶板',
            img: Wood_Panel,
        },
    ],
    expansion: [
        {
            name: '土地契约',
            img: Nail,
        },
        {
            name: '木锤',
            img: Screw,
        },
        {
            name: '标桩',
            img: Wood_Panel,
        },
    ],
}

export default function MaterialBalancer() {
    const [type, setType] = useState('warehouse')
    const [inventory, setInventory] = useState({ a: '', b: '', c: '' })
    const [limit, setLimit] = useState(89)
    const [result, setResult] = useState(null)

    const handleChange = (e) => {
        const { name, value } = e.target
        setInventory((prev) => ({ ...prev, [name]: value }))
    }

    const calculate = () => {
        let { a, b, c } = inventory
        a = parseInt(a)
        b = parseInt(b)
        c = parseInt(c)

        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            alert('请输入所有库存数量')
            return
        }

        const items = [
            { key: 'a', value: a },
            { key: 'b', value: b },
            { key: 'c', value: c },
        ]

        const max = Math.max(a, b, c)

        const diffs = items.map((item) => ({
            key: item.key,
            diff: max - item.value,
        }))

        let totalNeed = diffs.reduce((sum, d) => sum + d.diff, 0)
        const buys = { a: 0, b: 0, c: 0 }

        if (totalNeed >= limit) {
            diffs.forEach((d) => {
                buys[d.key] = Math.floor((d.diff / totalNeed) * limit)
            })

            let used = buys.a + buys.b + buys.c

            while (used < limit) {
                const needMore = diffs
                    .map((d) => ({
                        ...d,
                        remain: d.diff - buys[d.key],
                    }))
                    .sort((a, b) => b.remain - a.remain)

                const first = needMore.find((n) => n.remain > 0)
                if (!first) break
                buys[first.key]++
                used++
            }
        } else {
            diffs.forEach((d) => {
                buys[d.key] = d.diff
            })

            let used = buys.a + buys.b + buys.c
            let remaining = limit - used

            const sorted = items
                .map((item) => ({
                    key: item.key,
                    value: item.value,
                }))
                .sort((a, b) => a.value - b.value)

            let i = 0
            while (remaining > 0 && i < sorted.length) {
                buys[sorted[i].key]++
                remaining--
                i = (i + 1) % sorted.length
            }
        }

        const totalBuy = buys.a + buys.b + buys.c
        if (totalBuy < limit - 2) {
            alert('无法在保证平衡的前提下凑满 87 个以上材料，请检查数据')
            return
        }

        setResult({
            buy: buys,
            final: {
                a: a + buys.a,
                b: b + buys.b,
                c: c + buys.c,
            },
            totalBuy,
        })
    }

    const labels = MATERIAL_MAP[type]

    return (
        <div className="max-w-md p-4 mx-auto space-y-4 bg-white shadow rounded-2xl">
            <h1 className="text-2xl font-bold">建材库存平衡计算器</h1>

            <div className="flex space-x-4">
                <label>
                    <input
                        type="radio"
                        name="type"
                        value="warehouse"
                        checked={type === 'warehouse'}
                        onChange={() => {
                            setType('warehouse')
                            setInventory({ a: '', b: '', c: '' })
                            setResult(null)
                        }}
                    />{' '}
                    仓库
                </label>
                <label>
                    <input
                        type="radio"
                        name="type"
                        value="barn"
                        checked={type === 'barn'}
                        onChange={() => {
                            setType('barn')
                            setInventory({ a: '', b: '', c: '' })
                            setResult(null)
                        }}
                    />{' '}
                    粮仓
                </label>
                <label>
                    <input
                        type="radio"
                        name="type"
                        value="expansion"
                        checked={type === 'expansion'}
                        onChange={() => {
                            setType('expansion')
                            setInventory({ a: '', b: '', c: '' })
                            setResult(null)
                        }}
                    />{' '}
                    扩建
                </label>
            </div>

            <div className="space-y-2">
                <label className="flex gap-[6px]">
                    <img
                        src={labels[0].img}
                        className="w-[30px] h-[30px]"
                        alt=""
                    />
                    <span className="text-nowrap">{labels[0].name} 库存：</span>
                    <input
                        type="number"
                        name="a"
                        value={inventory.a}
                        onChange={handleChange}
                        className="flex-1 border"
                    />
                </label>
                <label className="flex gap-[6px]">
                    <img
                        src={labels[1].img}
                        className="w-[30px] h-[30px]"
                        alt=""
                    />
                    <span className="text-nowrap">{labels[1].name} 库存：</span>
                    <input
                        type="number"
                        name="b"
                        value={inventory.b}
                        onChange={handleChange}
                        className="flex-1 border"
                    />
                </label>
                <label className="flex gap-[6px]">
                    <img
                        src={labels[2].img}
                        className="w-[30px] h-[30px]"
                        alt=""
                    />
                    <span className="text-nowrap">{labels[2].name} 库存：</span>
                    <input
                        type="number"
                        name="c"
                        value={inventory.c}
                        onChange={handleChange}
                        className="flex-1 border"
                    />
                </label>

                {/* <label className="block">
                    {labels[1].name} 库存：
                    <input
                        type="number"
                        name="b"
                        value={inventory.b}
                        onChange={handleChange}
                        className="input"
                    />
                </label>
                <label className="block">
                    {labels[2].name} 库存：
                    <input
                        type="number"
                        name="c"
                        value={inventory.c}
                        onChange={handleChange}
                        className="input"
                    />
                </label> */}
                <label className="block">
                    每日可购买总数（默认 89）：
                    <input
                        type="number"
                        value={limit}
                        onChange={(e) => setLimit(parseInt(e.target.value))}
                        className="input"
                    />
                </label>
            </div>

            <button
                onClick={calculate}
                className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-xl"
            >
                计算
            </button>

            {result && (
                <div className="mt-4 space-y-2 text-lg">
                    <p>建议购买（共 {result.totalBuy} 个）：</p>
                    <ul className="ml-6 list-disc">
                        <li>
                            {labels[0].name}：{result.buy.a} 个
                        </li>
                        <li>
                            {labels[1].name}：{result.buy.b} 个
                        </li>
                        <li>
                            {labels[2].name}：{result.buy.c} 个
                        </li>
                    </ul>
                    <p className="mt-4">购买后的库存：</p>
                    <ul className="ml-6 list-disc">
                        <li>
                            {labels[0].name}：{result.final.a} 个
                        </li>
                        <li>
                            {labels[1].name}：{result.final.b} 个
                        </li>
                        <li>
                            {labels[2].name}：{result.final.c} 个
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}
