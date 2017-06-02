<?php

function amountInWords($kwota){
        $words = " ";
        $kw = round($kwota*100);
        $kwotaInt = $kw;
        $poz1 = intval($kwotaInt / 10000000);
        $kwotaInt = $kwotaInt - 10000000 * $poz1;
        $poz2 = intval($kwotaInt / 1000000);
        $kwotaInt = $kwotaInt - 1000000 * $poz2;
        $poz3 = intval($kwotaInt / 100000);
        $kwotaInt = $kwotaInt - 100000 * $poz3;
        $poz4 = intval($kwotaInt / 10000);
        $kwotaInt = $kwotaInt - 10000 * $poz4;
        $poz5 = intval($kwotaInt / 1000);
        $kwotaInt = $kwotaInt - 1000 * $poz5;
        $poz6 = intval($kwotaInt / 100);
        $kwotaInt = $kwotaInt - 100 * $poz6;
        $ppoz1 = intval($kwotaInt / 10);
        $kwotaInt = $kwotaInt - 10 * $ppoz1;
        $ppoz2 = intval($kwotaInt / 1);
        
        //tysiące
        switch($poz1){
            case 1: $words.="sto ";
            break;
            case 2: $words.="dwieście ";
            break;
            case 3: $words.="trzysta";
            break;
            case 4: $words.="czterysta ";
            break;
            case 5: $words.="pięćset ";
            break;
            case 6: $words.="sześćset ";
            break;
            case 7: $words.="siedemset ";
            break;
            case 8: $words.="osiemset ";
            break;
            case 9: $words.="dziewięćset ";
            break;
        }
            switch($poz2){
                case 1: {
                        switch($poz3){
                            case 0: $words.="dziesięć tysięcy ";
                            break;
                            case 1: $words.="jedenaście tysięcy ";
                            break;
                            case 2: $words.="dwanaście tysięcy ";
                            break;
                            case 3: $words.="trzynaście tysięcy ";
                            break;
                            case 4: $words.="czternaście tysięcy ";
                            break;
                            case 5: $words.="piętnaście tysięcy ";
                            break;
                            case 6: $words.="szesnaście tysięcy ";
                            break;
                            case 7: $words.="siedemnaście tysięcy ";
                            break;
                            case 8: $words.="osiemnaście tysięcy ";
                            break;
                            case 9: $words.="dziewiętnaście tysięcy ";
                            break;
                            }
                        }
                break;
                case 2: $words.="dwadzieścia ";
                break;
                case 3: $words.="trzydzieści ";
                break;
                case 4: $words.="czterdzieści ";
                break;
                case 5: $words.="pięćdziesiąt ";
                break;
                case 6: $words.="sześćdziesiąt ";
                break;
                case 7: $words.="siedemdziesiąt ";
                break;
                case 8: $words.="osiemdziesiąt ";
                break;
                case 9: $words.="dziewięćdziesiąt ";
                break;
            }
        
        if($poz2!=1){
        switch($poz3){
            case 1: 
                    if($poz2!=1 && ($poz1!=0 || $poz2!=0)){
                        $words.= "jeden tysięcy ";
                    }else if($poz1==0 && $poz2==0){
                        $words.= "tysiąc ";
                    }
            break;
            case 2: $words.="dwa tysiące ";
            break;
            case 3: $words.="trzy tysiące ";
            break;
            case 4: $words.="cztery tysiące ";
            break;
            case 5: $words.="pięć tysięcy ";
            break;
            case 6: $words.="sześć tysięcy ";
            break;
            case 7: $words.="siedem tysięcy ";
            break;
            case 8: $words.="osiem tysięcy ";
            break;
            case 9: $words.="dziewięć tysięcy ";
            break;
        }
        }
        //setki
        switch($poz4){
            case 1: $words.="sto ";
            break;
            case 2: $words.="dwieście ";
            break;
            case 3: $words.="trzysta ";
            break;
            case 4: $words.="czterysta ";
            break;
            case 5: $words.="pięćset ";
            break;
            case 6: $words.="sześćset ";
            break;
            case 7: $words.="siedemset ";
            break;
            case 8: $words.="osiemset ";
            break;
            case 9: $words.="dziewięćset ";
            break;
        }
            switch($poz5){
                case 1: {
                        switch($poz6){
                            case 0: $words.="dziesięć ";
                            break;
                            case 1: $words.="jedenaście ";
                            break;
                            case 2: $words.="dwanaście ";
                            break;
                            case 3: $words.="trzynaście ";
                            break;
                            case 4: $words.="czternaście ";
                            break;
                            case 5: $words.="piętnaście ";
                            break;
                            case 6: $words.="szesnaście ";
                            break;
                            case 7: $words.="siedemnaście ";
                            break;
                            case 8: $words.="osiemnaście ";
                            break;
                            case 9: $words.="dziewiętnaście ";
                            break;
                            }
                        }
                break;
                case 2: $words.="dwadzieścia ";
                break;
                case 3: $words.="trzydzieści ";
                break;
                case 4: $words.="czterdzieści ";
                break;
                case 5: $words.="pięćdziesiąt ";
                break;
                case 6: $words.="sześćdziesiąt ";
                break;
                case 7: $words.="siedemdziesiąt ";
                break;
                case 8: $words.="osiemdziesiąt ";
                break;
                case 9: $words.="dziewięćdziesiąt ";
                break;
            }
        if($poz5!=1){
        switch($poz6){
            case 1: 
                    if($poz5!=1){
                        $words.= "jeden ";
                    }
            break;
            case 2: $words.="dwa ";
            break;
            case 3: $words.="trzy ";
            break;
            case 4: $words.="cztery ";
            break;
            case 5: $words.="pięć ";
            break;
            case 6: $words.="sześć ";
            break;
            case 7: $words.="siedem ";
            break;
            case 8: $words.="osiem ";
            break;
            case 9: $words.="dziewięć ";
            break;
            }
        }
        if($poz6==1 && ( $poz1==0 && $poz2==0 && $poz3==0 && $poz4==0 && $poz5==0)){
            $words.="złoty ";
        }else if($poz5==1){
            $words.="złotych";
        }else if($poz6==0){
            $words.="złotych ";
        }else if($poz6==1){
            $words.="złotych ";
        }else if($poz6==2){
            $words.="złote ";
        }else if($poz6==3){
            $words.="złote ";
        }else if($poz6==4){
            $words.="złote ";
        }else if($poz6==5){
            $words.="złotych ";
        }else if($poz6==6){
            $words.="złotych ";
        }else if($poz6==7){
            $words.="złotych ";
        }else if($poz6==8){
            $words.="złotych ";
        }else if($poz6==9){
            $words.="złotych ";
        }
        if($poz6==0 && $poz1==0 && $poz2==0 && $poz3==0 && $poz4==0 && $poz5==0){
            $words="zero złotych ";
        }
        $words.=" i ";
        //grosze
        if($ppoz1==0 && $ppoz2 == 0){
            $words.="zero ";
        }
        switch($ppoz1){
                case 1: {
                        switch($poz2){
                            case 0: $words.="dziesięć ";
                            break;
                            case 1: $words.="jedenaście ";
                            break;
                            case 2: $words.="dwanaście ";
                            break;
                            case 3: $words.="trzynaście ";
                            break;
                            case 4: $words.="czternaście ";
                            break;
                            case 5: $words.="piętnaście ";
                            break;
                            case 6: $words.="szesnaście ";
                            break;
                            case 7: $words.="siedemnaście ";
                            break;
                            case 8: $words.="osiemnaście ";
                            break;
                            case 9: $words.="dziewiętnaście ";
                            break;
                            }
                        }
                break;
                case 2: $words.="dwadzieścia ";
                break;
                case 3: $words.="trzydzieści ";
                break;
                case 4: $words.="czterdzieści ";
                break;
                case 5: $words.="pięćdziesiąt ";
                break;
                case 6: $words.="sześćdziesiąt ";
                break;
                case 7: $words.="siedemdziesiąt ";
                break;
                case 8: $words.="osiemdziesiąt ";
                break;
                case 9: $words.="dziewięćdziesiąt ";
                break;
            }
        if($poz1!=1){
        switch($ppoz2){
            case 1: $words.= "jeden ";
            break;
            case 2: $words.="dwa ";
            break;
            case 3: $words.="trzy ";
            break;
            case 4: $words.="cztery ";
            break;
            case 5: $words.="pięć ";
            break;
            case 6: $words.="sześć ";
            break;
            case 7: $words.="siedem ";
            break;
            case 8: $words.="osiem ";
            break;
            case 9: $words.="dziewięć ";
            break;
            }
        }
        if($ppoz2==1 && $ppoz1==0){
            $words.="grosz ";
        }else if($ppoz2==0){
            $words.="groszy ";
        }else if($ppoz2==1){
            $words.="groszy ";
        }else if($ppoz2==2){
            $words.="grosze ";
        }else if($ppoz2==3){
            $words.="grosze ";
        }else if($ppoz2==4){
            $words.="grosze ";
        }else if($ppoz2==5){
            $words.="groszy ";
        }else if($ppoz2==6){
            $words.="groszy ";
        }else if($ppoz2==7){
            $words.="groszy ";
        }else if($ppoz2==8){
            $words.="groszy ";
        }else if($ppoz2==9){
            $words.="groszy ";
        }
        return $words;
    }
?>