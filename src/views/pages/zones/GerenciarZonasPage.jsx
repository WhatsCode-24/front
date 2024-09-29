import React, { useEffect, useState } from 'react'
import {
  CButton,
  CCol,
  CContainer,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilMagnifyingGlass, cilPencil, cilTrash, cilUser } from '@coreui/icons'
import zonesServices from '../../../services/zonesService'

const PageZonesManagement = () => {
  const [zones, setZones] = useState([])
  const [modalAddVisible, setModalAddVisible] = useState(false)
  const [modalEditVisible, setModalEditVisible] = useState(false)
  const [addZone, setAddZone] = useState(null)
  const [editZone, setEditZone] = useState(null)

  const findZones = async () => {
    try {
      const { data } = await zonesServices.getAllZones()
      setZones(data)
    } catch (error) {
      console.error(error)
    }
  }

  const deleteZone = async (id) => {
    try {
      await zonesServices.deleteZone(id)
      findZones()
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    findZones()
  }, [])
  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-start">
      <CContainer>
        <CRow className="justify-content-between align-items-center">
          <CCol md={12}>
            <div className="d-flex flex-row justify-content-between p-3">
              <h6 className="float-start display-6 me-6">Áreas</h6>
              <div className="d-flex flex-row justify-content-center align-items-center">
                <button
                  color="primary"
                  className="btn btn-sm btn-primary"
                  onClick={() => {
                    setModalAddVisible(true)
                  }}
                >
                  Adicionar Áreas
                </button>
              </div>
            </div>
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">ID</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Nome</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Tamanho</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Tipo Acesso</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Empresa</CTableHeaderCell>
                  <CTableHeaderCell scope="col" className="text-center">
                    Actions
                  </CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {zones &&
                  zones.map((zone) => (
                    <CTableRow key={zone.id_empresa_comodo}>
                      <CTableHeaderCell scope="row">{zone.id_empresa_comodo}</CTableHeaderCell>
                      <CTableDataCell>{zone.nome_comodo}</CTableDataCell>
                      <CTableDataCell>{zone.tamanho_comodo}</CTableDataCell>
                      <CTableDataCell>{zone.tipo_acesso}</CTableDataCell>
                      <CTableDataCell>-</CTableDataCell>
                      <CTableDataCell className="d-flex flex-row justify-content-around">
                        <button
                          className="btn btn-sm btn-primary"
                          onClick={() => {
                            setEditZone(zone)
                            setModalEditVisible(true)
                          }}
                        >
                          <CIcon icon={cilPencil} />
                        </button>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => {
                            deleteZone(zone.id_empresa_comodo)
                          }}
                        >
                          <CIcon icon={cilTrash} />
                        </button>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
              </CTableBody>
            </CTable>
          </CCol>
        </CRow>
      </CContainer>
      <CModal
        size="xl"
        visible={modalAddVisible}
        onClose={() => {}}
        aria-labelledby="AdicionarComodo"
      >
        <CModalHeader>
          <CModalTitle id="AdicionarComodo">Adicionar Area</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow>
            <CCol md={6}>
              <CInputGroup className="mb-3">
                <CInputGroupText>
                  <CIcon icon={cilUser} />
                </CInputGroupText>
                <CFormInput
                  type="text"
                  placeholder="Nome"
                  value={addZone?.nome_comodo}
                  onChange={(e) => {
                    setAddZone({ ...addZone, nome_comodo: e.target.value })
                  }}
                />
              </CInputGroup>
            </CCol>
            <CCol md={6}>
              <CInputGroup className="mb-3">
                <CInputGroupText>
                  <CIcon icon={cilUser} />
                </CInputGroupText>
                <CFormInput
                  type="text"
                  placeholder="Tamanho"
                  value={addZone?.tamanho_comodo}
                  onChange={(e) => {
                    setAddZone({ ...addZone, tamanho_comodo: e.target.value })
                  }}
                />
              </CInputGroup>
            </CCol>
            <CCol md={6}>
              <CInputGroup className="mb-3">
                <CInputGroupText>
                  <CIcon icon={cilUser} />
                </CInputGroupText>
                <CFormInput
                  type="text"
                  placeholder="Tipo de Acesso"
                  value={addZone?.tipo_acesso}
                  onChange={(e) => {
                    setAddZone({ ...addZone, tipo_acesso: e.target.value })
                  }}
                />
              </CInputGroup>
            </CCol>
            {/* <CCol md={6}>
              <CInputGroup className="mb-3">
                <CInputGroupText>
                  <CIcon icon={cilUser} />
                </CInputGroupText>
                <CFormInput type="text" placeholder="Empresa" />
              </CInputGroup>
            </CCol> */}
          </CRow>
          <CRow>
            <CCol md={12} className="d-flex flex-row justify-content-end">
              <CButton
                color="primary"
                onClick={async () => {
                  try {
                    const create = await zonesServices.createZone({ ...addZone, id_empresa: 3 })
                    console.log(create)
                    findZones()
                    setModalAddVisible(false)
                  } catch (error) {
                    console.error(error)
                  }
                }}
              >
                Adicionar
              </CButton>
            </CCol>
          </CRow>
        </CModalBody>
      </CModal>
      <CModal size="xl" visible={modalEditVisible} onClose={() => {}} aria-labelledby="EditComodo">
        <CModalHeader>
          <CModalTitle id="EditComodo">Editar Area</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow>
            <CCol md={6}>
              <CInputGroup className="mb-3">
                <CInputGroupText>
                  <CIcon icon={cilUser} />
                </CInputGroupText>
                <CFormInput
                  type="text"
                  placeholder="Nome"
                  value={editZone?.nome_comodo}
                  onChange={(e) => {
                    setEditZone({ ...editZone, nome_comodo: e.target.value })
                  }}
                />
              </CInputGroup>
            </CCol>
            <CCol md={6}>
              <CInputGroup className="mb-3">
                <CInputGroupText>
                  <CIcon icon={cilUser} />
                </CInputGroupText>
                <CFormInput
                  type="text"
                  placeholder="Tamanho"
                  value={editZone?.tamanho_comodo}
                  onChange={(e) => {
                    setEditZone({ ...editZone, tamanho_comodo: e.target.value })
                  }}
                />
              </CInputGroup>
            </CCol>
            <CCol md={6}>
              <CInputGroup className="mb-3">
                <CInputGroupText>
                  <CIcon icon={cilUser} />
                </CInputGroupText>
                <CFormInput
                  type="text"
                  placeholder="Tipo de Acesso"
                  value={editZone?.tipo_acesso}
                  onChange={(e) => {
                    setEditZone({ ...editZone, tipo_acesso: e.target.value })
                  }}
                />
              </CInputGroup>
            </CCol>
          </CRow>
          <CRow>
            <CCol md={12} className="d-flex flex-row justify-content-end">
              <CButton
                color="primary"
                onClick={async () => {
                  try {
                    const update = await zonesServices.updateZone(editZone)
                    console.log(update)
                    findZones()
                    setModalEditVisible(false)
                  } catch (error) {
                    console.error(error)
                  }
                }}
              >
                Editar
              </CButton>
            </CCol>
          </CRow>
        </CModalBody>
      </CModal>
    </div>
  )
}

export default PageZonesManagement
