'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ChangeEvent, useState } from 'react'

export default function Home() {

  const [A, setA] = useState<string | undefined>('')
  const [B, setB] = useState<string | undefined>('')

  function handleA(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault()

    const valueA = e.target.value.trim()

    if (!valueA || valueA.length === 0) {
      setA('')
      setB('')
    }
    
    if (valueA.match(/^[0-9]+.?$/) || valueA.match(/^[0-9]+.[0-9]+$/)) {
      const valueB = Number(valueA) * 1.609
      setA(valueA)
      setB(valueB.toFixed(4))
    }
  }

  function handleB(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault()

    const valueB = e.target.value.trim()

    if (!valueB || valueB.length === 0) {
      setB('')
      setA('')
    }
    
    if (valueB.match(/^[0-9]+.?$/) || valueB.match(/^[0-9]+.[0-9]+$/)) {
      const valueA = Number(valueB) / 1.609
      setB(valueB)
      setA(valueA.toFixed(4))
    }
  }

  return (
    <div className='flex w-full h-screen'>
      <Card className='m-auto max-w-xl'>
        <CardHeader>
          <CardTitle>Running Pace Converter</CardTitle>
          <CardDescription>Switch between different pace measurements.</CardDescription>
        </CardHeader>

        <CardContent className='flex flex-col gap-4 justify-center items-center'>
          <div>
            <p className='text-2xl'>
              {Number(A).toFixed(1)} min/km ≈ {Number(B).toFixed(1)} min/mile
            </p>
          </div>
          <div className='flex flex-row gap-2 justify-center items-center'>
            <div>
              <Label>Minutes per kilometer</Label>
              <Input placeholder='6.00' value={A} onChange={handleA} />
            </div>

            <div className='bg-grey'>
              <p className='text-3xl'>=</p>
            </div>

            <div>
              <Label>Minutes per mile</Label>
              <Input placeholder='9.65' value={B} onChange={handleB} />
            </div>
          </div>
          
          <div>
            <p className='text-slate-500'><b>Estimate: </b>To convert min/km to min/miles, multiply by 1.609.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
