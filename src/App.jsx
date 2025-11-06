import React from 'react'
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import Programiz from './Programiz'
import Python from './Python'
import Nav from './Nav'
import Sql from './Sql'
import C from './C'
import Ch from './Ch'
import Cpp from './Cpp'
import Go from './Go'
import DSA from './Dsa'
import Html from './Html'
import Css from './CSS'
import Java from './Java'
import Js from './Javascript'
import Kotlin from './Kotlin'
import NumPY from './Numpy'
import Pandas from './Pandas'
import R from './R'
import Ruby from './Ruby'
import Rust from './Rust'
import Swift from './Swift'
import TypeScript from './Typescript'
import Login from './Login'
function App(){
  return(
    <div>
    
<BrowserRouter>
<Nav/>
<Routes>
  <Route path='/Login' element={<Login/>}/>
  <Route path='/' element={<Programiz/>}/>
  <Route path='/Python' element={<Python/>}/>
  <Route path='/Sql' element={<Sql/>}/>
  <Route path='/C' element={<C/>}/>
  <Route path='/Ch' element={<Ch/>}/>
  <Route path='/Cpp' element={<Cpp/>}/>
  <Route path='/Go' element={<Go/>}/>
  <Route path='/DSA' element={<DSA/>}/>
  <Route path='/Html' element={<Html/>}/>
  <Route path='/Css' element={<Css/>}/>
  <Route path='/Java' element={<Java/>}/>
  <Route path='/Javascript' element={<Js/>}/>
  <Route path='/Kotlin' element={<Kotlin/>}/>
  <Route path='/NumPY' element={<NumPY/>}/>
  <Route path='/Pandas' element={<Pandas/>}/>
  <Route path='/R' element={<R/>}/>
  <Route path='/Ruby' element={<Ruby/>}/>
  <Route path='/Rust' element={<Rust/>}/>
  <Route path='/Swift' element={<Swift/>}/>
  <Route path='/Typescript' element={<TypeScript/>}/>

</Routes>
</BrowserRouter>

    </div>
  )
}

export default App