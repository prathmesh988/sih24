"use client";

import React, { useEffect } from "react";
let json = `{
  "company": {
    "name": "EKTA ENTERPRICE",
    "gstin": "23AJBPS6285R1ZF",
    "subject": "Subject to SEONI Jurisdiction",
    "fssaiNo": "11417230000027",
    "address": "BUDHWARI BAZAR,GN ROAD SEONI,",
    "phone": "Ph : 9179174888 , 9826623188",
    "officeNo": "07692-220897",
    "stateCode": "23"
  },
  "dlNo": "Quis aliquip nobis i",
  "party": {
    "name": "Enim maxime a quos p",
    "address": "30 East Milton Lane",
    "gstin": "5",
    "stateCode": "23",
    "mobileNo": 41234,
    "balanceBf": 0
  },
  "invoice": {
    "no": 11,
    "mode": "CASH",
    "date": "2024-08-10",
    "time": "7:01:34 pm",
    "dueDate": 10469001600000
  },
  "ack": {
    "no": 11,
    "date": "2024-08-10"
  },
  "irn": "0265cdbc86f02a327272925c34fd6014d5701a832b58d00f5b5b85cf452f30b8",
  "items": [
    {
      "item": "MK001",
      "stock": 1821,
      "godown": "",
      "pack": "4.5 KG",
      "gst": 5,
      "pcBx": 4,
      "mrp": 907,
      "rate": 585,
      "qty": "01",
      "unit": "Box",
      "amount": "2340.00",
      "netAmount": "2082.60",
      "cess": "1",
      "sch": "11",
      "cd": "1",
      "particular": "MK SOYA OIL 5 LTR JAR"
    }
  ],
  "summary": {
    "itemsInBill": 1,
    "casesInBill": 1,
    "looseItemsInBill": 0
  },
  "taxDetails": [
    {
      "goods": "2082.60",
      "sgst": 2.5,
      "sgstValue": 52.065,
      "cgst": 2.5,
      "cgstValue": 52.065
    }
  ],
  "totals": {
    "grossAmt": 2082.6,
    "lessSch": 0,
    "lessCd": 0,
    "rOff": 0,
    "netAmount": 2082.6
  }
}`;
const parsedInvoiceData: any = JSON.parse(json);

const InvoiceComponent = function InvoiceComponent() {
  const invoiceData = parsedInvoiceData;
  return (
    <div className="">
      <div className="bg-white p-4 print:p-8 max-w-full">
        {/* Header with Company Details */}
        <div className="flex justify-between border-b-2 border-black">
          <div>
            <p className="font-bold">GSTN: {invoiceData.company.gstin}</p>
            <p>{invoiceData.company.subject}</p>
            <p>FSSAI NO: {invoiceData.company.fssaiNo}</p>
          </div>
          <div className="text-center">
            <p className="uppercase text-lg font-bold">tax invoice</p>
            <h1 className="text-2xl font-bold">{invoiceData.company.name}</h1>
            <p>{invoiceData.company.address}</p>
          </div>
          <div className="text-right">
            <p>{invoiceData.company.phone}</p>
            <p>Office No. {invoiceData.company.officeNo}</p>
            <p>state code: {invoiceData.company.stateCode}</p>
          </div>
        </div>

        {/* DL No and Party Details */}
        <div className="border-b-2 border-black py-2">
          <p className="font-bold">D.L. No.: {invoiceData.dlNo}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 border-b-2 border-black py-2">
          {/* Left Side */}
          <div>
            <p>
              <span className="font-bold">Party:</span> {invoiceData.party.name}
            </p>
            <p>
              <span className="font-bold">Address:</span>{" "}
              {invoiceData.party.address}
            </p>
            <p>
              <span className="font-bold">GSTIN:</span>{" "}
              {invoiceData.party.gstin}{" "}
              <span className="ml-4 font-bold">State Code:</span>{" "}
              {invoiceData.party.stateCode}
            </p>
            <p>
              <span className="font-bold">Mobile No.:</span>{" "}
              {invoiceData.party.mobileNo}{" "}
              <span className="ml-4 font-bold">Balance B/f:</span>{" "}
              {invoiceData.party.balanceBf}
            </p>
          </div>
          {/* Right Side */}
          <div>
            <p>
              <span className="font-bold">Inv. No:</span>{" "}
              {invoiceData.invoice.no}{" "}
              <span className="ml-4 font-bold">Mode:</span>{" "}
              {invoiceData.invoice.mode}
            </p>
            <p>
              <span className="font-bold">Date:</span>{" "}
              {invoiceData.invoice.date}{" "}
              <span className="ml-4">{invoiceData.invoice.time}</span>
            </p>
            <p>
              <span className="font-bold">Due Date:</span>{" "}
              {invoiceData.invoice.dueDate}
            </p>
          </div>
        </div>

        {/* Items Table */}
        <section className="w-full flex gap-3">
          <div className="flex">
            <span className="font-bold">Ack. No.</span>
            <p>162417426714120</p>
          </div>
          <div className="flex">
            <span className="font-bold">Ack.Date</span>
            <p>2024/06/13 07:08:00</p>
          </div>
          <div className="flex">
            <span className="font-bold">IRN No.</span>
            <p>
              0265cdbc86f02a327272925c34fd6014d5701a832b58d00f5b5b85cf452f30b8
            </p>
          </div>
        </section>
        <div className="overflow-auto">
          <table className="w-full border-collapse border-2 border-black">
            <thead>
              <tr className="border-b-2 border-black">
                {/* Header Cells */}
                {[
                  "Particulars/HSN",
                  "Pack",
                  "M.R.P.",
                  "GST%",
                  "Rate (incl of Tax)",
                  "Unit",
                  "Qty",
                  "Free",
                  "Sch Rs.",
                  "Net Amt.",
                ].map((header) => (
                  <th key={header} className="border-r-2 border-black p-2">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {invoiceData.items.map((item: any, index: any) => (
                <tr key={index} className="border-b-2 border-black">
                  {/* Row Details */}
                  <td className="border-r-2 border-black p-2">
                    {item.particular}
                  </td>
                  <td className="border-r-2 border-black p-2">{item.pack}</td>
                  <td className="border-r-2 border-black p-2">{item.mrp}</td>
                  <td className="border-r-2 border-black p-2">{item.gst}</td>
                  <td className="border-r-2 border-black p-2">{item.rate}</td>
                  <td className="border-r-2 border-black p-2">{item.unit}</td>
                  <td className="border-r-2 border-black p-2">{item.qty}</td>
                  <td className="border-r-2 border-black p-2">{item.free}</td>
                  <td className="border-r-2 border-black p-2">{item.schRs}</td>
                  <td className="p-2">{item.netAmount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Summary and Totals */}
        <div className="flex  border-t-2 border-black   text-sm  border-2 flex-nowrap	basis-0">
          {/* Summary */}
          <div className="border-2  ">
            <p>Items in Bill: {invoiceData.summary.itemsInBill}</p>
            <p>Cases in Bill: {invoiceData.summary.casesInBill}</p>
            <p>Loose items in Bill: {invoiceData.summary.looseItemsInBill}</p>
          </div>
          {/* Terms and Conditions */}
          <div className="w-[30%] px-2 border-2">
            <p className="font-bold underline ">Terms & Conditions:</p>
            <p>
              1. We hereby certify that articles of food mentioned in the
              invoice are warranted to be of the nature and quality which they
              purport to be as per the Food Safety and Standards Act and Rules.
            </p>
            <p>2. Goods once sold will not be taken back. E & OE.</p>
          </div>
          {/* Totals */}
          <div className="w-[15%]">
            {/* <p>Gross Amt: {invoiceData.totals.grossAmt}</p>
            <p>Less Sch: {invoiceData.totals.lessSch}</p>
            <p>Less CD: {invoiceData.totals.lessCd}</p>
            <p>R.Off: {invoiceData.totals.rOff}</p>
            <p>
              <span className="font-bold">Net Amt:</span>{" "}
              {invoiceData.totals.netAmount}
            </p> */}

            <table
              style={{
                width: "100%",
              }}
            >
              <thead>
                <tr style={{}}>
                  <th style={{ border: "1px solid black" }}>Gross Amt.</th>
                  <th
                    style={{ border: "1px solid black ", paddingLeft: "10px" }}
                  >
                    {invoiceData.totals.grossAmt}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    style={{ border: "1px solid black ", paddingLeft: "10px" }}
                  >
                    Less Sch.
                  </td>
                  <td
                    style={{ border: "1px solid black ", paddingLeft: "10px" }}
                  >
                    {invoiceData.totals.lessSch}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{ border: "1px solid black ", paddingLeft: "10px" }}
                  >
                    Less CD
                  </td>
                  <td
                    style={{ border: "1px solid black ", paddingLeft: "10px" }}
                  >
                    {invoiceData.totals.lessCd}
                  </td>
                </tr>

                <tr>
                  <td
                    style={{ border: "1px solid black ", paddingLeft: "10px" }}
                  >
                    R.Off
                  </td>
                  <td
                    style={{ border: "1px solid black ", paddingLeft: "10px" }}
                  >
                    {invoiceData.totals.rOff}
                  </td>
                </tr>
              </tbody>
            </table>
            <div
              style={{
                //       "
                //   display: flex;
                //   padding: 8px;
                //   justify-content: space-between;
                //   border: 1px solid black;
                //   font-weight: 700;
                // "

                display: "flex",
                padding: "8px",
                justifyContent: "space-between",
                border: "1px solid black",
                fontWeight: "700",
              }}
            >
              <div>Net Amt.</div>
              <div>31598.00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceComponent;
