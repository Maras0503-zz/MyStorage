<?php
    $docId = $_POST['myVar1'];
    $id = $_POST['myVar2'];
    $token = $_POST['myVar3'];
    $lang = $_POST['myVar4'];
    $sum = 0;
    $content = '';
    include('amountToWords.php');
    include('mpdf/mpdf.php');
    include('connect.php');
    $mpdf=new mPDF('iso-8859-2','', 0, '', 10, 10, 10, 10, 0, 0, 'P');
    $stylesheet = file_get_contents('pdf.css');
    //GET DOCUMENT INFO
    $returnArray = array();
    $fetch = $mysqli->query('call getDocumentInfo('.$docId.')'); 
    while ($row = $fetch->fetch_array()) {
        $rowArray['document_type_short'] = $row['document_type_short'];            
        $rowArray['document_number'] = $row['document_number'];
        $rowArray['document_accept_date'] = $row['document_accept_date'];
        $rowArray['document_sale_date'] = $row['document_accept_date'];
        $rowArray['contractor_id'] = $row['contractor_id'];
        $rowArray['contractor_name'] = $row['contractor_name'];
        $rowArray['contractor_postal_code'] = $row['contractor_postal_code'];
        $rowArray['contractor_city'] = $row['contractor_city'];
        $rowArray['contractor_street'] = $row['contractor_street'];
        $rowArray['contractor_nip'] = $row['contractor_nip'];
        $rowArray['contractor_phone'] = $row['contractor_phone'];
        $rowArray['contractor_email'] = $row['contractor_email'];
        $rowArray['document_year'] = $row['document_year'];
        array_push($returnArray,$rowArray);
    }
    $mysqli->close();
    //GET USER COMPANY
    include('connect.php');
    $userCompany = array();
    $fetch = $mysqli->query('call getUserCompany('.$id.')'); 
    while ($row = $fetch->fetch_array()) {
        $rowArray['contractor_id'] = $row['contractor_id'];
        $rowArray['contractor_name'] = $row['contractor_name'];
        $rowArray['contractor_postal_code'] = $row['contractor_postal_code'];
        $rowArray['contractor_city'] = $row['contractor_city'];
        $rowArray['contractor_street'] = $row['contractor_street'];
        $rowArray['contractor_nip'] = $row['contractor_nip'];
        $rowArray['contractor_phone'] = $row['contractor_phone'];
        $rowArray['contractor_email'] = $row['contractor_email'];
        array_push($userCompany,$rowArray);
    }
    $mysqli->close();

    if($lang == 'pl'){
        //CREATING CONTENT
        $content .= '<div class="docName">';
        $content .=     $returnArray[0]['document_type_short'].' NR '.$returnArray[0]['document_number'].'/'.$returnArray[0]['document_year'];
        $content .= '</div><br><br>';
        $content .= '<div class="docDate">DATA SPRZDAŻY: '.date('m/d/Y', $returnArray[0]['document_sale_date']/1000).'</div>';
        $content .= '<div class="docSaleDate">DATA WYSTAWIENIA: '.date('m/d/Y', $returnArray[0]['document_accept_date']/1000).'</div>';
        //CONTRACTOR DETAILS
        $content .= '<div class="contractorDetails">';
        $content .= '<div class="conDetailName">KONTRAHENT:</div>';
        $content .= '<div class="conDetailName">'.$returnArray[0]['contractor_name'].' (ID: '.$returnArray[0]['contractor_id'].')</div>';
        $content .= '<div class="conDetailLab">'.$returnArray[0]['contractor_postal_code'].' '.$returnArray[0]['contractor_city'].'</div>';
        $content .= '<div class="conDetailLab">UL. '.$returnArray[0]['contractor_street'].'</div>';
        if($returnArray[0]['contractor_id'] != ''){
            $content .= '<div class="conDetailLab">NIP: '.$returnArray[0]['contractor_nip'].'</div>';
        }
        $content .= '<div class="conDetailLab">TEL: '.$returnArray[0]['contractor_phone'].'</div>';
        $content .= '<div class="conDetailLab">E-MAIL: '.$returnArray[0]['contractor_email'].'</div>';
        $content .= '</div>';
        //COMPANY DETAILS
        $content .= '<div class="companyDetails">';
        $content .= '<div class="conDetailName">WYSTAWIAJĄCY:</div>';
        $content .= '<div class="conDetailName">'.$userCompany[0]['contractor_name'].' (ID: '.$userCompany[0]['contractor_id'].')</div>';
        $content .= '<div class="conDetailLab">'.$userCompany[0]['contractor_postal_code'].' '.$userCompany[0]['contractor_city'].'</div>';
        $content .= '<div class="conDetailLab">UL. '.$userCompany[0]['contractor_street'].'</div>';
        if($userCompany[0]['contractor_id'] != ''){
            $content .= '<div class="conDetailLab">NIP: '.$userCompany[0]['contractor_nip'].'</div>';
        }
        $content .= '<div class="conDetailLab">TEL: '.$userCompany[0]['contractor_phone'].'</div>';
        $content .= '<div class="conDetailLab">E-MAIL: '.$userCompany[0]['contractor_email'].'</div>';
        $content .= '</div>';
    }

    if($lang == 'en'){
        $type = '';
        if($returnArray[0]['document_type_short'] == 'PZ'){
            $type = 'DELIVERY NOTE';
        }
        if($returnArray[0]['document_type_short'] == 'WZ'){
            $type = 'SHIPPING NOTE';
        }
        if($returnArray[0]['document_type_short'] == 'FV'){
            $type = 'INVOICE';
        }
        //CREATING CONTENT
        $content .= '<div class="docName">';
        $content .=     $type .' No '.$returnArray[0]['document_number'].'/'.$returnArray[0]['document_year'];
        $content .= '</div><br><br>';
        $content .= '<div class="docDate">SALE DATE: '.date('m/d/Y', $returnArray[0]['document_sale_date']/1000).'</div>';
        $content .= '<div class="docSaleDate">CREATE DATE: '.date('m/d/Y', $returnArray[0]['document_accept_date']/1000).'</div>';
        //CONTRACTOR DETAILS
        $content .= '<div class="contractorDetails">';
        $content .= '<div class="conDetailName">TO:</div>';
        $content .= '<div class="conDetailName">'.$returnArray[0]['contractor_name'].' (ID: '.$returnArray[0]['contractor_id'].')</div>';
        $content .= '<div class="conDetailLab">'.$returnArray[0]['contractor_postal_code'].' '.$returnArray[0]['contractor_city'].'</div>';
        $content .= '<div class="conDetailLab">UL. '.$returnArray[0]['contractor_street'].'</div>';
        if($returnArray[0]['contractor_id'] != ''){
            $content .= '<div class="conDetailLab">NIP: '.$returnArray[0]['contractor_nip'].'</div>';
        }
        $content .= '<div class="conDetailLab">TEL: '.$returnArray[0]['contractor_phone'].'</div>';
        $content .= '<div class="conDetailLab">E-MAIL: '.$returnArray[0]['contractor_email'].'</div>';
        $content .= '</div>';
        //COMPANY DETAILS
        $content .= '<div class="companyDetails">';
        $content .= '<div class="conDetailName">ISSUED:</div>';
        $content .= '<div class="conDetailName">'.$userCompany[0]['contractor_name'].' (ID: '.$userCompany[0]['contractor_id'].')</div>';
        $content .= '<div class="conDetailLab">'.$userCompany[0]['contractor_postal_code'].' '.$userCompany[0]['contractor_city'].'</div>';
        $content .= '<div class="conDetailLab">STREET: '.$userCompany[0]['contractor_street'].'</div>';
        if($userCompany[0]['contractor_id'] != ''){
            $content .= '<div class="conDetailLab">UTR: '.$userCompany[0]['contractor_nip'].'</div>';
        }
        $content .= '<div class="conDetailLab">PHONE: '.$userCompany[0]['contractor_phone'].'</div>';
        $content .= '<div class="conDetailLab">E-MAIL: '.$userCompany[0]['contractor_email'].'</div>';
        $content .= '</div>';
    }
    //CREATING RECORDS TABLE
    $content .= '<div class="productTableDiv">';
    $content .= '<table class="posTab">';
    if($lang == 'pl'){
        if($returnArray[0]['document_type_short'] != 'PZ'){
            $content .= '<thead>';
            $content .= '<tr>';
                $content .= '<td class="tableHeadCell col1of11">';
                    $content .= 'LP.';
                $content .= '</td>';
                $content .= '<td class="tableHeadCell col2of11">';
                    $content .= 'ID';
                $content .= '</td>';
                $content .= '<td class="tableHeadCell col3of11">';
                    $content .= 'NAZWA';
                $content .= '</td>';
                $content .= '<td class="tableHeadCell col4of11">';
                    $content .= 'ILOŚĆ';
                $content .= '</td>';
                $content .= '<td class="tableHeadCell col5of11">';
                    $content .= 'JEDN.';
                $content .= '</td>';
                $content .= '<td class="tableHeadCell col6of11">';
                    $content .= 'VAT';
                $content .= '</td>';
                $content .= '<td class="tableHeadCell col7of11">';
                    $content .= 'RABAT';
                $content .= '</td>';
                $content .= '<td class="tableHeadCell col8of11">';
                    $content .= 'CENA NETTO';
                $content .= '</td>';
                $content .= '<td class="tableHeadCell col9of11">';
                    $content .= 'CENA BRUTTO';
                $content .= '</td>';
                $content .= '<td class="tableHeadCell col10of11">';
                    $content .= 'WARTOŚĆ BRUTTO';
                $content .= '</td>';
                $content .= '<td class="tableHeadCell col11of11">';
                    $content .= 'Z RABATEM';
                $content .= '</td>';
            $content .= '</tr>';
            $content .= '</thead>';
            $content .= '<tbody>';
            //GET DOCUMENT RECORDS
            include('connect.php');
            $counter = 1;
            $fetch = $mysqli->query('call getDocumentRecords('.$docId.')'); 
            while ($row = $fetch->fetch_array()) {
                $content .= '<tr>';
                    $content .= '<td class="tableBodyCell col1of11content">'.$counter.'</td>';
                    $content .= '<td class="tableBodyCell col2of11content">'.$row['document_records_product_id'].'</td>';
                    $content .= '<td class="tableBodyCell col3of11content">'.$row['product_name'].'</td>';
                    $numb = $row['document_records_product_number']/100;
                    $content .= '<td class="tableBodyCell col4of11content">'.$numb.'</td>';
                    $content .= '<td class="tableBodyCell col5of11content">'.$row['product_unit_short'].'</td>';  
                    $content .= '<td class="tableBodyCell col6of11content">'.$row['document_records_vat'].'</td>';
                    $disc = $row['document_records_discount']/100;
                    $content .= '<td class="tableBodyCell col7of11content">'.$disc.'</td>';
                    $price = $row['document_records_price']/100;
                    $content .= '<td class="tableBodyCell col8of11content">'.$price.'</td>';
                    $price = $price + ($price*$row['document_records_vat']/100);
                    $content .= '<td class="tableBodyCell col9of11content">'.$price.'</td>';
                    $price = $price * $numb;
                    $content .= '<td class="tableBodyCell col10of11content">'.$price.'</td>';
                    $price = $price - ($price*$disc);
                    $content .= '<td class="tableBodyCell col11of11content">'.$price.'</td>';
                    $sum += $price;
                $content .= '</tr>';
                $counter++;
            }
            $mysqli->close();
            $content .= '</tbody>';
        } else {

        }
    }
    if($lang == 'en'){
        if($returnArray[0]['document_type_short'] != 'PZ'){
            $content .= '<thead>';
            $content .= '<tr>';
                $content .= '<td class="tableHeadCell col1of11">';
                    $content .= 'NO.';
                $content .= '</td>';
                $content .= '<td class="tableHeadCell col2of11">';
                    $content .= 'ID';
                $content .= '</td>';
                $content .= '<td class="tableHeadCell col3of11">';
                    $content .= 'NAME';
                $content .= '</td>';
                $content .= '<td class="tableHeadCell col4of11">';
                    $content .= 'QTY';
                $content .= '</td>';
                $content .= '<td class="tableHeadCell col5of11">';
                    $content .= 'UNIT';
                $content .= '</td>';
                $content .= '<td class="tableHeadCell col6of11">';
                    $content .= 'TAX';
                $content .= '</td>';
                $content .= '<td class="tableHeadCell col7of11">';
                    $content .= 'DISC.';
                $content .= '</td>';
                $content .= '<td class="tableHeadCell col8of11">';
                    $content .= 'PRICE NET';
                $content .= '</td>';
                $content .= '<td class="tableHeadCell col9of11">';
                    $content .= 'PRICE GROSS';
                $content .= '</td>';
                $content .= '<td class="tableHeadCell col10of11">';
                    $content .= 'VALUE GROSS';
                $content .= '</td>';
                $content .= '<td class="tableHeadCell col11of11">';
                    $content .= 'WITH DISC.';
                $content .= '</td>';
            $content .= '</tr>';
            $content .= '</thead>';
        } else {
            
        }
    }
    $content .= '</table>';
    $sum = intval($sum * 100)/100;
    $content .= $sum;
    $content .= amountInWords($sum);
    $content .= '</div>';
    if($lang == 'pl'){
        $mpdf->setFooter("Strona {PAGENO} z {nb}");
    };
    if($lang == 'en'){
        $mpdf->setFooter("Page {PAGENO} of {nb}");
    };
    $mpdf->WriteHTML($stylesheet,1);
    $mpdf->WriteHTML($content,2);
    if($lang == 'pl'){
        $mpdf->Output($returnArray[0]['document_type_short'].'_'.$returnArray[0]['document_number'].'_'.$returnArray[0]['document_year'].'_'.$returnArray[0]['contractor_name'].'.pdf', 'I');
    };
    if($lang == 'en'){
        $mpdf->Output($type.'_'.$returnArray[0]['document_number'].'_'.$returnArray[0]['document_year'].'_'.$returnArray[0]['contractor_name'].'.pdf', 'I');
    };
    $mpdf->Output($returnArray[0]['document_number'].$returnArray[0]['contractor_name'], 'I');
    exit;
