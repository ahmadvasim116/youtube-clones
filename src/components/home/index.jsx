import React from 'react'
import Layout from '../layout'

function Home() {
  return (
    <Layout>
      <div className='grid md:grid-cols-4 gap-5'>
          {
            Array(12).fill(0).map((item, index)=> (
              <div key={index} className='flex flex-col gap-y-5'>
                  <img src={`thumb/0.jpg`} className="rounded-lg" />
                  <div className='flex gap-x-4'>
                    <img 
                      src='https://yt3.ggpht.com/g_V8HPxmEoE8exOkI1F1Vud9rg91SccSjoEKNdGE9otuFnVUxbFTqI71g33SS367FFhOLtrCBqU=s68-c-k-c0x00ffffff-no-rj'
                      className='rounded-full w-10 h-10'
                      />
                      <div>
                        <h1 className='text-sm font-semibold mb-3'>next js - 13 tutorial in hindi || next js hello world run program || NextJs Tutorial #4</h1>
                        <div className='flex items-center gap-x-2'>
                          <p className='text-xs text-slate-500 mb-1'>Learn Coding with Bhai</p>
                          <span className='material-icons' style={{fontSize:16}}>check_circle</span>
                        </div>
                        <div className='flex items-center gap-x-2'>
                          <p className='text-xs text-slate-500'>100K View</p>
                          <p className='text-xs text-slate-500'>1 Day Ago</p>
                        </div>
                      </div>
                  </div>
              </div>
            ))
          }
      </div>
    </Layout>
  )
}

export default Home