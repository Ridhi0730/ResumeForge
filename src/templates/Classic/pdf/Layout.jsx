import { Page, Document } from '@react-pdf/renderer'
import React from 'react'

import Header from "./Header";
import Summary from './Summary';
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import styles from "./PDFStyles";

const Layout = ({ formData }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>

        <Header formData={formData} />

        <Summary formData={formData} />

        <Education formData={formData} />

        <Experience formData={formData} />

        <Projects formData={formData} />

        <Skills formData={formData} />

      </Page>
    </Document>
  )
}

export default Layout