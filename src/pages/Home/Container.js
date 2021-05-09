import React from 'react'
import Table from '../componant/table';
import { MyResponsiveLine } from '../componant/chart';

const data = [
    {
        "id": "japan",
        "color": "hsl(230, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 110
            },
            {
                "x": "helicopter",
                "y": 233
            },
            {
                "x": "boat",
                "y": 24
            },
            {
                "x": "train",
                "y": 201
            },
            {
                "x": "subway",
                "y": 280
            },
            {
                "x": "bus",
                "y": 62
            },
            {
                "x": "car",
                "y": 141
            },
            {
                "x": "moto",
                "y": 99
            },
            {
                "x": "bicycle",
                "y": 263
            },
            {
                "x": "horse",
                "y": 16
            },
            {
                "x": "skateboard",
                "y": 187
            },
            {
                "x": "others",
                "y": 275
            }
        ]
    },
    {
        "id": "france",
        "color": "hsl(3, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 105
            },
            {
                "x": "helicopter",
                "y": 164
            },
            {
                "x": "boat",
                "y": 43
            },
            {
                "x": "train",
                "y": 120
            },
            {
                "x": "subway",
                "y": 179
            },
            {
                "x": "bus",
                "y": 286
            },
            {
                "x": "car",
                "y": 180
            },
            {
                "x": "moto",
                "y": 234
            },
            {
                "x": "bicycle",
                "y": 119
            },
            {
                "x": "horse",
                "y": 50
            },
            {
                "x": "skateboard",
                "y": 211
            },
            {
                "x": "others",
                "y": 120
            }
        ]
    },
    {
        "id": "us",
        "color": "hsl(342, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 67
            },
            {
                "x": "helicopter",
                "y": 186
            },
            {
                "x": "boat",
                "y": 160
            },
            {
                "x": "train",
                "y": 93
            },
            {
                "x": "subway",
                "y": 200
            },
            {
                "x": "bus",
                "y": 85
            },
            {
                "x": "car",
                "y": 230
            },
            {
                "x": "moto",
                "y": 1
            },
            {
                "x": "bicycle",
                "y": 288
            },
            {
                "x": "horse",
                "y": 129
            },
            {
                "x": "skateboard",
                "y": 50
            },
            {
                "x": "others",
                "y": 75
            }
        ]
    },
    {
        "id": "germany",
        "color": "hsl(19, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 89
            },
            {
                "x": "helicopter",
                "y": 17
            },
            {
                "x": "boat",
                "y": 159
            },
            {
                "x": "train",
                "y": 74
            },
            {
                "x": "subway",
                "y": 108
            },
            {
                "x": "bus",
                "y": 246
            },
            {
                "x": "car",
                "y": 132
            },
            {
                "x": "moto",
                "y": 8
            },
            {
                "x": "bicycle",
                "y": 123
            },
            {
                "x": "horse",
                "y": 203
            },
            {
                "x": "skateboard",
                "y": 44
            },
            {
                "x": "others",
                "y": 270
            }
        ]
    },
    {
        "id": "norway",
        "color": "hsl(215, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 60
            },
            {
                "x": "helicopter",
                "y": 134
            },
            {
                "x": "boat",
                "y": 57
            },
            {
                "x": "train",
                "y": 25
            },
            {
                "x": "subway",
                "y": 236
            },
            {
                "x": "bus",
                "y": 175
            },
            {
                "x": "car",
                "y": 288
            },
            {
                "x": "moto",
                "y": 291
            },
            {
                "x": "bicycle",
                "y": 127
            },
            {
                "x": "horse",
                "y": 269
            },
            {
                "x": "skateboard",
                "y": 16
            },
            {
                "x": "others",
                "y": 222
            }
        ]
    }
];

const Card = ({ bg, icone, title, number }) => {
    return (
        <div className={"py-5 rounded-lg text-white  w-full justify-center space-x-5 flex items-center  " + bg}>
            <div className='w-16 h-16 flex items-center justify-center rounded-full bg-white'>
                <i className={'fas fa-lg text-gray-400 fa-' + icone}></i>
            </div>
            <div className='space-y-1'>

                <p className='font-bold'>{title}</p>
                <p className='text-2xl '>{number}</p>


                <div className='h-1 bg-gray-800 mt-5'>
                    <span className='h-full w-1/4 block bg-white'></span>
                </div>

            </div>
        </div>
    )
}
export default function Container() {
    return (
        <div className='container space-y-8 mx-auto p-5'>

            <h1 className='text-xl '>DashBoard</h1>

            <div className='grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full px-5'>

                <Card bg='bg-gradient-to-r from-green-400 to-green-500' icone='users' title={'Number Mubers'} number={450} />
                <Card bg='bg-gradient-to-r from-red-400 to-red-500' icone='suitcase-rolling' title={'Number Projects'} number={450} />
                <Card bg='bg-gradient-to-r from-purple-400  to-purple-500 ' icone='users-cog' title={'All Admens'} number={450} />
                <Card bg='bg-gradient-to-r from-blue-600 to-blue-400' icone='envelope' title={'All Email'} number={450} />

            </div>
            <h3 className='text-xl  '>Status</h3>
            <div className='h-64 w-full md:h-96'>

                <MyResponsiveLine data={data} />
            </div>
            {/* end chard */}

            <h3 className='text-xl  '>Users</h3>

            <div>
                <div className='bg-white p-3 flex justify-end'>
                    <button className='space-x-1'>

                        <i className="fas fa-border-all"></i>
                        <span>VIEW </span>
                    </button>
                </div>
                <Table />
            </div>
            {/* end table  users*/}

            <h3 className='text-xl  '>Projecs</h3>

            <div>
                <div className='bg-white p-3 flex justify-end'>
                    <button className='space-x-1'>

                        <i className="fas fa-border-all"></i>
                        <span>VIEW </span>
                    </button>
                </div>
                <Table />
            </div>
            {/* end table  projects*/}


        </div>
    )
}
