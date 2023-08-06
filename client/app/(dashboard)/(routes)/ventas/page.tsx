'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ActivitySquare} from "lucide-react";
import { Heading } from '@/components/heading';

declare module 'jspdf' {
  interface jsPDF {
    autoTable: (options: any) => jsPDF;
  }
}

interface Item {
  id: number;
  invoice_id: string;
  branch: string;
  city: string;
  customer_type: string;
  gender: string;
  product_line: string;
  total: string;
}

// Función para convertir el monto a número
const parseAmount = (amount: string) => {
  return parseFloat(amount.replace('$', '')).toString(); // Convertir el monto a número y luego a string
};

const VentasPage = () => {
  const [data, setData] = useState<Item[]>([]); // Tipo explícito para 'data'
  const [showTable, setShowTable] = useState(true); // Controla si se debe mostrar la tabla o no
  const [pdfGenerated, setPdfGenerated] = useState(false); // Controla si se ha generado el PDF o no

  useEffect(() => {
    axios.get<Item[]>('http://127.0.0.1:8000/api/items/')
      .then(response => {
        // Convertir los montos a números y ordenar los datos de forma descendente
        const sortedData = response.data.map(item => ({
          ...item,
          total: parseAmount(item.total), // Extraer el monto y convertirlo a número solo para ordenar
        })).sort((a, b) => parseFloat(b.total) - parseFloat(a.total)); // Ordenar por el monto de forma descendente (mayor a menor)

        setData(sortedData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Función para generar y descargar el PDF
  const handleDownloadPDF = () => {
  const doc = new jsPDF();
  doc.setFontSize(12);

  // Encabezado de la tabla
  const headers = ['Invoice', 'Status', 'Method', 'Amount'];

  // Datos de la tabla
  const tableData = data.slice(0, 20).map((item) => [
    item.invoice_id,
    item.customer_type,
    item.product_line,
    item.total.toString(), // Convertir el número a string para mostrarlo en el PDF
  ]);

  // Generar la tabla en el PDF
  doc.autoTable({
    head: [headers],
    body: tableData,
  });

  // Descargar el PDF
  doc.save('invoices.pdf');
  };
  return (
    <div>
      <Heading
        title="Insights de Ventas"
        description="Supply"
        icon={ActivitySquare}
        iconColor="text-pink-700"
        bgColor="text-pink-700/10"
      />
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Superpowers Insights
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          La combinaciones de los mejores indicadores para el performance de tu negocio
        </p>
      </div>
      <div className="absolute top-20 right-4">
        {/* Mostrar el botón solo si no se ha generado el PDF */}
        {!pdfGenerated && (
          <Button className="bg-green-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md"
          onClick={handleDownloadPDF}>Exportar a PDF</Button>
        )}
      </div>

      <div className="mx-auto max-w-4xl">
        {/* Mostrar la tabla solo si showTable es true */}
        {showTable && (
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px] header-cell">Invoice</TableHead>
                <TableHead className="w-[150px] header-cell">Status</TableHead>
                <TableHead className=" header-cell">Method</TableHead>
                <TableHead className="text-right header-cell">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.slice(0, 20).map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium text-blue-500">{item.invoice_id}</TableCell>
                  <TableCell>{item.customer_type}</TableCell>
                  <TableCell>{item.product_line}</TableCell>
                  <TableCell className="text-right">{item.total}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  )
}

export default VentasPage;
