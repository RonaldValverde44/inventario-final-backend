import { useState,useEffect } from "react"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import EquipoService from "../services/Equipo.service"

const Equipo = () => {
    const [data,setData] = useState([])
    const [newData,setNewData] = useState({
        codigo:"",
        descripcion:"",
        serie:"",
        modelo:"",
        marca:"",
        condicion:null
    })
    const [refreshData,setRefreshData] = useState(false)
    const [dataId,setDataId] = useState(0)

    const tab = <>&nbsp;&nbsp;</>;

    useEffect(()=>{
        EquipoService.getAll().then(
            (res)=>{
                setData(res);
                setRefreshData(false)
            }
        )
    },[refreshData])

    const handleInputChange = (e) =>{
        const {name,value} = e.target
        return setNewData({
            ...newData,[name]:value
        })
    }

    
    const createUpdateData = (e) =>{
        e.preventDefault();
        if(dataId > 0){
            EquipoService.updateOne(dataId,newData).then(
                (res)=>{
                    setRefreshData(true);
                    setNewData({
                        codigo:"",
                        descripcion:"",
                        serie:"",
                        modelo:"",
                        marca:"",
                        condicion:null
                    })
                    setDataId(0)
                }
            )
        }
        else{
            EquipoService.setNew(newData).then(
                (res)=>{
                    console.log(res)
                    setRefreshData(true)
                    setNewData({
                        codigo:"",
                        descripcion:"",
                        serie:"",
                        modelo:"",
                        marca:"",
                        condicion:null
                    })
                    setDataId(0)
                }
            )
        }
    }

    const editData = (cod) =>{
        EquipoService.getOne(cod).then(
            (res)=>{
                setNewData({
                    codigo:res.codigo,
                    descripcion:res.descripcion,
                    serie:res.serie,
                    modelo:res.modelo,
                    marca:res.marca,
                    condicion:res.condicion
                })
                setDataId(cod)
            }
        )
    }

    const deleteData = (cod) =>{
        EquipoService.deleteOne(cod).then(
            (res)=>{
                setRefreshData(true);
                setNewData({
                    codigo:"",
                    descripcion:"",
                    serie:"",
                    modelo:"",
                    marca:"",
                    condicion:null
                })
                setDataId(0)
            }
        )
    }

    return(
        <div id="layout-wrapper">
            <Header />
            <div className="vertical-menu">
                <div data-simplebar className="h-100">
                    <Sidebar />
                </div>
            </div>
            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <h4>Equipos</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-body">
                                        <form onSubmit={createUpdateData}>
                                            <div className="form-group">
                                                <label htmlFor="simpleinput">Código</label>
                                                <input type="text" 
                                                id="simpleinput" 
                                                className="form-control"
                                                name="codigo" 
                                                placeholder=""
                                                value={newData.codigo}
                                                onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="simpleinput">Descripción</label>
                                                <input type="text" 
                                                id="simpleinput" 
                                                className="form-control"
                                                name="descripcion" 
                                                placeholder=""
                                                value={newData.descripcion}
                                                onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="simpleinput">Serie</label>
                                                <input type="text" 
                                                id="simpleinput" 
                                                className="form-control"
                                                name="serie" 
                                                placeholder=""
                                                value={newData.serie}
                                                onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="simpleinput">Modelo</label>
                                                <input type="text" 
                                                id="simpleinput" 
                                                className="form-control"
                                                name="modelo" 
                                                placeholder=""
                                                value={newData.modelo}
                                                onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="simpleinput">Marca</label>
                                                <input type="text" 
                                                id="simpleinput" 
                                                className="form-control"
                                                name="marca" 
                                                placeholder=""
                                                value={newData.marca}
                                                onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="simpleinput">Condición</label>
                                                <input type="text" 
                                                id="simpleinput" 
                                                className="form-control"
                                                name="condicion" 
                                                placeholder=""
                                                value={newData.condicion}
                                                onChange={handleInputChange}
                                                />
                                            </div>
                                            <button type="submit" className="btn btn-primary waves-effect waves-light">Guardar</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="table-responsive">
                                    <table className="table mb-0">
                                        <thead>
                                            <tr>
                                                <th>Código</th>
                                                <th>Descripción</th>
                                                <th>Serie</th>
                                                <th>Modelo</th>
                                                <th>Marca</th>
                                                <th>Condición</th>
                                                <th>Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map(dt => {
                                                return (
                                                    <tr key={dt.id}>
                                                        <td>{dt.codigo}</td>
                                                        <td>{dt.descripcion}</td>
                                                        <td>{dt.serie}</td>
                                                        <td>{dt.modelo}</td>
                                                        <td>{dt.marca}</td>
                                                        <td>{dt.condicion}</td>
                                                        <td>
                                                            <button className="btn btn-success"
                                                            onClick={()=>editData(dt.id)}
                                                            >
                                                                Editar
                                                            </button>
                                                            {tab}
                                                            <button className="btn btn-danger"
                                                            onClick={()=>deleteData(dt.id)}
                                                            >
                                                                Eliminar
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Equipo