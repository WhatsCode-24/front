import React from 'react'
import {
  CButton,
  CCol,
  CContainer,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilMagnifyingGlass, cilUser } from '@coreui/icons'

const PageAcessManagement = () => {
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
                <CTableRow>
                  <CTableHeaderCell scope="row">1</CTableHeaderCell>
                  <CTableDataCell>Guilherme Duarte Cenzi Dias</CTableDataCell>
                  <CTableDataCell>399.367.478-28</CTableDataCell>
                  <CTableDataCell>guilhermedcdias.2023@gmail.com</CTableDataCell>
                  <CTableDataCell>(12) 97407-7685</CTableDataCell>
                  <CTableDataCell className="d-flex flex-row justify-content-around">
                    <button className="btn btn-sm btn-primary">
                      <CIcon icon={cilUser} />
                    </button>
                    <button className="btn btn-sm btn-success">
                      <CIcon icon={cilUser} />
                    </button>
                    <button className="btn btn-sm btn-danger">
                      <CIcon icon={cilUser} />
                    </button>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">2</CTableHeaderCell>
                  <CTableDataCell>Guilherme Duarte Cenzi Dias</CTableDataCell>
                  <CTableDataCell>399.367.478-28</CTableDataCell>
                  <CTableDataCell>guilhermedcdias.2023@gmail.com</CTableDataCell>
                  <CTableDataCell>(12) 97407-7685</CTableDataCell>
                  <CTableDataCell className="d-flex flex-row justify-content-around">
                    <button className="btn btn-sm btn-primary">
                      <CIcon icon={cilUser} />
                    </button>
                    <button className="btn btn-sm btn-success">
                      <CIcon icon={cilUser} />
                    </button>
                    <button className="btn btn-sm btn-danger">
                      <CIcon icon={cilUser} />
                    </button>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">3</CTableHeaderCell>
                  <CTableDataCell>Guilherme Duarte Cenzi Dias</CTableDataCell>
                  <CTableDataCell>399.367.478-28</CTableDataCell>
                  <CTableDataCell>guilhermedcdias.2023@gmail.com</CTableDataCell>
                  <CTableDataCell>(12) 97407-7685</CTableDataCell>
                  <CTableDataCell className="d-flex flex-row justify-content-around">
                    <button className="btn btn-sm btn-primary">
                      <CIcon icon={cilUser} />
                    </button>
                    <button className="btn btn-sm btn-success">
                      <CIcon icon={cilUser} />
                    </button>
                    <button className="btn btn-sm btn-danger">
                      <CIcon icon={cilUser} />
                    </button>
                  </CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default PageAcessManagement
