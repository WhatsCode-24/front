import React, { useEffect } from 'react'
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
import { cilMagnifyingGlass, cilPen, cilPencil, cilUser } from '@coreui/icons'
import acessosServices from '../../../services/acessosService'

const PageAcessManagement = () => {
  const [acessos, setAcessos] = React.useState([])
  const [modalAddVisible, setModalAddVisible] = React.useState(false)

  const getAllAcessos = async () => {
    try {
      const { data } = await acessosServices.getAllAcess()
      console.log(data)
      setAcessos(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getAllAcessos()
  }, [])

  //   classificacao_acesso
  // :
  // "Critico"
  // horario_acesso
  // :
  // "2024-03-09 21:00:00"
  // id_acesso
  // :
  // 3
  // id_empresa_comodo
  // :
  // 1
  // nome_comodo
  // :
  // "Comodo 1"
  // observacao_acesso
  // :
  // "Acesso Fora de Horario"

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-start">
      <CContainer>
        <CRow className="justify-content-between align-items-center">
          <CCol md={12}>
            <div className="d-flex flex-row justify-content-between p-3">
              <h6 className="float-start display-6 me-6">Acessos</h6>
              <div className="d-flex flex-row justify-content-center align-items-center">
                <button color="primary" className="btn btn-sm btn-primary">
                  Adicionar Acesso
                </button>
              </div>
            </div>
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">ID</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Classificação de Acesso</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Observação de Acesso</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Horario de Acesso</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Local</CTableHeaderCell>
                  <CTableHeaderCell scope="col" className="text-center">
                    Actions
                  </CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {acessos &&
                  acessos.map((acesso) => (
                    <CTableRow key={acesso.id_acesso}>
                      <CTableHeaderCell scope="row">{acesso.id_acesso}</CTableHeaderCell>
                      <CTableDataCell>{acesso.classificacao_acesso}</CTableDataCell>
                      <CTableDataCell>{acesso.observacao_acesso}</CTableDataCell>
                      <CTableDataCell>{acesso.horario_acesso}</CTableDataCell>
                      <CTableDataCell>{acesso.nome_comodo}</CTableDataCell>
                      <CTableDataCell className="d-flex flex-row justify-content-around">
                        <button className="btn btn-sm btn-primary">
                          <CIcon icon={cilPencil} />
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
        aria-labelledby="EditarAccesso"
      >
        <CModalHeader>
          <CModalTitle id="EditarAccesso">Editar Acesso</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow>
            <CCol>
              <CInputGroup className="mb-3">
                <CInputGroupText>
                  <CIcon icon={cilUser} />
                </CInputGroupText>
                <CFormInput type="text" placeholder="classificação de Acesso" />
              </CInputGroup>
            </CCol>
            <CCol>
              <CInputGroup className="mb-3">
                <CInputGroupText>
                  <CIcon icon={cilMagnifyingGlass} />
                </CInputGroupText>
                <CFormInput type="text" placeholder="Observação do Acesso" />
              </CInputGroup>
            </CCol>
          </CRow>
          <CRow>
            <CCol>
              <CInputGroup className="mb-3">
                <CInputGroupText>
                  <CIcon icon={cilUser} />
                </CInputGroupText>
                <CFormInput type="text" placeholder="Horario do Acesso" />
              </CInputGroup>
            </CCol>
          </CRow>
          {/* botão salvar */}
          <div className="d-flex flex-row justify-content-end">
            <CButton color="primary">Salvar</CButton>
          </div>
        </CModalBody>
      </CModal>
    </div>
  )
}

export default PageAcessManagement
