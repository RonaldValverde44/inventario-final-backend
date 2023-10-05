import { useState,useEffect } from "react"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import MovimientoService from "../services/Movimiento.service"

const Movimiento = () => {
    const [data,setData] = useState([])
    const [newData,setNewData] = useState({
        tipo_movimiento:null,
        motivo:null,
        cantidad:null,
        saldo:null,
        laboratorio:null,
        equipo:null
    })
    const [refreshData,setRefreshData] = useState(false)
    const [dataId,setDataId] = useState(0)

    const tab = <>&nbsp;&nbsp;</>;

    useEffect(()=>{
        MovimientoService.getAll().then(
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
            MovimientoService.updateOne(dataId,newData).then(
                (res)=>{
                    setRefreshData(true);
                    setNewData({
                        tipo_movimiento:null,
                        motivo:null,
                        cantidad:null,
                        saldo:null,
                        laboratorio:null,
                        equipo:null
                    })
                    setDataId(0)
                }
            )
        }
        else{
            MovimientoService.setNew(newData).then(
                (res)=>{
                    console.log(res)
                    setRefreshData(true)
                    setNewData({
                        tipo_movimiento:null,
                        motivo:null,
                        cantidad:null,
                        saldo:null,
                        laboratorio:null,
                        equipo:null
                    })
                    setDataId(0)
                }
            )
        }
    }

    const editData = (cod) =>{
        MovimientoService.getOne(cod).then(
            (res)=>{
                setNewData({
                    tipo_movimiento:res.tipo_movimiento,
                    motivo:res.motivo,
                    cantidad:res.cantidad,
                    saldo:res.saldo,
                    laboratorio:res.laboratorio,
                    equipo:res.equipo
                })
                setDataId(cod)
            }
        )
    }

    const deleteData = (cod) =>{
        MovimientoService.deleteOne(cod).then(
            (res)=>{
                setRefreshData(true);
                setNewData({
                    tipo_movimiento:null,
                    motivo:null,
                    cantidad:null,
                    saldo:null,
                    laboratorio:null,
                    equipo:null
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
                                <h4>Movimientos</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-body">
                                        <form onSubmit={createUpdateData}>
                                            <div className="form-group">
                                                <label htmlFor="simpleinput">Tipo Movimiento</label>
                                                <input type="text" 
                                                id="simpleinput" 
                                                className="form-control"
                                                name="tipo_movimiento" 
                                                placeholder=""
                                                value={newData.tipo_movimiento}
                                                onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="simpleinput">Motivo</label>
                                                <input type="text" 
                                                id="simpleinput" 
                                                className="form-control"
                                                name="motivo" 
                                                placeholder=""
                                                value={newData.motivo}
                                                onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="simpleinput">Cantidad</label>
                                                <input type="text" 
                                                id="simpleinput" 
                                                className="form-control"
                                                name="cantidad" 
                                                placeholder=""
                                                value={newData.cantidad}
                                                onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="simpleinput">Saldo</label>
                                                <input type="text" 
                                                id="simpleinput" 
                                                className="form-control"
                                                name="saldo" 
                                                placeholder=""
                                                value={newData.saldo}
                                                onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="simpleinput">Laboratorio</label>
                                                <input type="text" 
                                                id="simpleinput" 
                                                className="form-control"
                                                name="laboratorio" 
                                                placeholder=""
                                                value={newData.laboratorio}
                                                onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="simpleinput">Equipo</label>
                                                <input type="text" 
                                                id="simpleinput" 
                                                className="form-control"
                                                name="equipo" 
                                                placeholder=""
                                                value={newData.equipo}
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
                                                <th>Tipo Movimiento</th>
                                                <th>Motivo</th>
                                                <th>Cantidad</th>
                                                <th>Saldo</th>
                                                <th>Laboratorio</th>
                                                <th>Equipo</th>
                                                <th>Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map(dt => {
                                                return (
                                                    <tr key={dt.id}>
                                                        <td>{dt.tipo_movimiento}</td>
                                                        <td>{dt.motivo}</td>
                                                        <td>{dt.cantidad}</td>
                                                        <td>{dt.saldo}</td>
                                                        <td>{dt.laboratorio}</td>
                                                        <td>{dt.equipo}</td>
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

export default Movimiento