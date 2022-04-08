import React from 'react'
import Layout from '../Layout'

function AddPage() {

    const [add, setAdd] = useState(false)
  return (
    <Layout>
        <button>Add Product</button>
    </Layout>
  )
}

export default AddPage