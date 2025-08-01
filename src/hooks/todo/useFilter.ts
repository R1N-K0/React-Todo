import { useState } from "react"

export default function useFilter() {
    const [filter, setFilter]  = useState<string>("all")
    const handleFilter = (filter: string) => {
    setFilter(filter)
  }
    
    return {filter, setFilter, handleFilter}
}