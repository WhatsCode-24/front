import React, { useEffect } from 'react'
import {
  CButton,
  CCol,
  CContainer,
  CFormInput,
  CFormSelect,
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
  const [editAcesso, setEditAcesso] = React.useState(null)
  const [addAcesso, setAddAcesso] = React.useState(null)
  const [modalEditVisible, setModalEditVisible] = React.useState(false)
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
                <button
                  color="primary"
                  className="btn btn-sm btn-primary"
                  onClick={() => setModalAddVisible(true)}
                >
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
                        <button
                          className="btn btn-sm btn-primary"
                          onClick={() => {
                            setEditAcesso(acesso)
                            setModalEditVisible(true)
                          }}
                        >
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
        visible={modalEditVisible}
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
                <CFormInput
                  type="text"
                  placeholder="classificação de Acesso"
                  value={editAcesso?.classificacao_acesso}
                  onChange={(e) =>
                    setEditAcesso({ ...editAcesso, classificacao_acesso: e.target.value })
                  }
                />
              </CInputGroup>
            </CCol>
            <CCol>
              <CInputGroup className="mb-3">
                <CInputGroupText>
                  <CIcon icon={cilMagnifyingGlass} />
                </CInputGroupText>
                <CFormInput
                  type="text"
                  placeholder="Observação do Acesso"
                  value={editAcesso?.observacao_acesso}
                  onChange={(e) =>
                    setEditAcesso({ ...editAcesso, observacao_acesso: e.target.value })
                  }
                />
              </CInputGroup>
            </CCol>
          </CRow>
          <CRow>
            <CCol>
              <CInputGroup className="mb-3">
                <CInputGroupText>
                  <CIcon icon={cilUser} />
                </CInputGroupText>
                <CFormInput
                  type="text"
                  placeholder="Horario do Acesso"
                  value={editAcesso?.horario_acesso}
                  onChange={(e) => setEditAcesso({ ...editAcesso, horario_acesso: e.target.value })}
                />
              </CInputGroup>
            </CCol>
          </CRow>
          {/* botão salvar */}
          <div className="d-flex flex-row justify-content-end">
            <CButton color="primary">Salvar</CButton>
          </div>
        </CModalBody>
      </CModal>
      <CModal
        size="xl"
        visible={modalAddVisible}
        onClose={() => {}}
        aria-labelledby="AdicionarAccesso"
      >
        <CModalHeader>
          <CModalTitle id="AdicionarAccesso">Adicionar Acesso</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow>
            <CCol>
              <CInputGroup className="mb-3">
                <CInputGroupText>
                  <CIcon icon={cilUser} />
                </CInputGroupText>
                <CFormInput
                  type="text"
                  placeholder="classificação de Acesso"
                  value={addAcesso?.classificacao_acesso}
                  onChange={(e) =>
                    setAddAcesso({ ...addAcesso, classificacao_acesso: e.target.value })
                  }
                />
              </CInputGroup>
            </CCol>
            <CCol>
              <CInputGroup className="mb-3">
                <CInputGroupText>
                  <CIcon icon={cilMagnifyingGlass} />
                </CInputGroupText>
                <CFormInput
                  type="text"
                  placeholder="Observação do Acesso"
                  value={addAcesso?.observacao_acesso}
                  onChange={(e) =>
                    setAddAcesso({ ...addAcesso, observacao_acesso: e.target.value })
                  }
                />
              </CInputGroup>
            </CCol>
          </CRow>
          <CRow>
            <CCol>
              <CInputGroup className="mb-3">
                <CInputGroupText>
                  <CIcon icon={cilUser} />
                </CInputGroupText>
                <CFormInput
                  type="text"
                  placeholder="Horario do Acesso"
                  value={addAcesso?.horario_acesso}
                  onChange={(e) => setAddAcesso({ ...addAcesso, horario_acesso: e.target.value })}
                />
              </CInputGroup>
            </CCol>
            <CCol>
              <CFormSelect aria-label="Default select example">
                <option>Selecione a Area do Acesso</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3" disabled>
                  Three
                </option>
              </CFormSelect>
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
