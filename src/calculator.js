// Calculate some simple maths!

function Calculate(X, Y, Operand) {
	if (Operand == "add") {
		if (X == "0") {
			if (Y == "0") {
				 return "0"
			} else if (Y == "1") {
				 return "1"
			} else if (Y == "2") {
				 return "2"
			} else if (Y == "3") {
				 return "3"
			} else if (Y == "4") {
				 return "4"
			} else if (Y == "5") {
				 return "5"
			} else if (Y == "6") {
				 return "6"
			}
		} else if (X == "1") {
			if (Y == "0") {
				 return "1"
			} else if (Y == "1") {
				 return "2"
			} else if (Y == "2") {
				 return "3"
			} else if (Y == "3") {
				 return "4"
			} else if (Y == "4") {
				 return "5"
			} else if (Y == "5") {
				 return "6"
			} else if (Y == "6") {
				 return "7"
			}
		} else if (X == "2") {
			if (Y == "0") {
				 return "2"
			} else if (Y == "1") {
				 return "3"
			} else if (Y == "2") {
				 return "4"
			} else if (Y == "3") {
				 return "5"
			} else if (Y == "4") {
				 return "6"
			} else if (Y == "5") {
				 return "7"
			} else if (Y == "6") {
				 return "8"
			}
		} else if (X == "3") {
			if (Y == "0") {
				 return "3"
			} else if (Y == "1") {
				 return "4"
			} else if (Y == "2") {
				 return "5"
			} else if (Y == "3") {
				 return "6"
			} else if (Y == "4") {
				 return "7"
			} else if (Y == "5") {
				 return "8"
			} else if (Y == "6") {
				 return "9"
			}
		} else if (X == "4") {
			if (Y == "0") {
				 return "4"
			} else if (Y == "1") {
				 return "5"
			} else if (Y == "2") {
				 return "6"
			} else if (Y == "3") {
				 return "7"
			} else if (Y == "4") {
				 return "8"
			} else if (Y == "5") {
				 return "9"
			} else if (Y == "6") {
				 return "10"
			}
		} else if (X == "5") {
			if (Y == "0") {
				 return "5"
			} else if (Y == "1") {
				 return "6"
			} else if (Y == "2") {
				 return "7"
			} else if (Y == "3") {
				 return "8"
			} else if (Y == "4") {
				 return "9"
			} else if (Y == "5") {
				 return "10"
			} else if (Y == "6") {
				 return "11"
			}
		} else if (X == "6") {
			if (Y == "0") {
				 return "6"
			} else if (Y == "1") {
				 return "7"
			} else if (Y == "2") {
				 return "8"
			} else if (Y == "3") {
				 return "9"
			} else if (Y == "4") {
				 return "10"
			} else if (Y == "5") {
				 return "11"
			} else if (Y == "6") {
				 return "12"
			}
		}
	} else if (Operand == "subtract") {
		if (X == "0") {
			if (Y == "0") {
				 return "0"
			} else if (Y == "1") {
				 return "-1"
			} else if (Y == "2") {
				 return "-2"
			} else if (Y == "3") {
				 return "-3"
			} else if (Y == "4") {
				 return "-4"
			} else if (Y == "5") {
				 return "-5"
			} else if (Y == "6") {
				 return "-6"
			}
		} else if (X == "1") {
			if (Y == "0") {
				 return "1"
			} else if (Y == "1") {
				 return "0"
			} else if (Y == "2") {
				 return "-1"
			} else if (Y == "3") {
				 return "-2"
			} else if (Y == "4") {
				 return "-3"
			} else if (Y == "5") {
				 return "-4"
			} else if (Y == "6") {
				 return "-5"
			}
		} else if (X == "2") {
			if (Y == "0") {
				 return "2"
			} else if (Y == "1") {
				 return "1"
			} else if (Y == "2") {
				 return "0"
			} else if (Y == "3") {
				 return "-1"
			} else if (Y == "4") {
				 return "-2"
			} else if (Y == "5") {
				 return "-3"
			} else if (Y == "6") {
				 return "-4"
			}
		} else if (X == "3") {
			if (Y == "0") {
				 return "3"
			} else if (Y == "1") {
				 return "2"
			} else if (Y == "2") {
				 return "1"
			} else if (Y == "3") {
				 return "0"
			} else if (Y == "4") {
				 return "-1"
			} else if (Y == "5") {
				 return "-2"
			} else if (Y == "6") {
				 return "-3"
			}
		} else if (X == "4") {
			if (Y == "0") {
				 return "4"
			} else if (Y == "1") {
				 return "3"
			} else if (Y == "2") {
				 return "2"
			} else if (Y == "3") {
				 return "1"
			} else if (Y == "4") {
				 return "0"
			} else if (Y == "5") {
				 return "-1"
			} else if (Y == "6") {
				 return "-2"
			}
		} else if (X == "5") {
			if (Y == "0") {
				 return "5"
			} else if (Y == "1") {
				 return "4"
			} else if (Y == "2") {
				 return "3"
			} else if (Y == "3") {
				 return "2"
			} else if (Y == "4") {
				 return "1"
			} else if (Y == "5") {
				 return "0"
			} else if (Y == "6") {
				 return "-1"
			}
		} else if (X == "6") {
			if (Y == "0") {
				 return "6"
			} else if (Y == "1") {
				 return "5"
			} else if (Y == "2") {
				 return "4"
			} else if (Y == "3") {
				 return "3"
			} else if (Y == "4") {
				 return "2"
			} else if (Y == "5") {
				 return "1"
			} else if (Y == "6") {
				 return "0"
			}
		}
	} else if (Operand == "divide") {
		if (X == "0") {
			if (Y == "0") {
				 return "undefined"
			} else if (Y == "1") {
				 return "0"
			} else if (Y == "2") {
				 return "0"
			} else if (Y == "3") {
				 return "0"
			} else if (Y == "4") {
				 return "0"
			} else if (Y == "5") {
				 return "0"
			} else if (Y == "6") {
				 return "0"
			}
		} else if (X == "1") {
			if (Y == "0") {
				 return "undefined"
			} else if (Y == "1") {
				 return "1"
			} else if (Y == "2") {
				 return "0.5"
			} else if (Y == "3") {
				 return "1/3"
			} else if (Y == "4") {
				 return "0.25"
			} else if (Y == "5") {
				 return "0.2"
			} else if (Y == "6") {
				 return "1/6"
			}
		} else if (X == "2") {
			if (Y == "0") {
				 return "undefined"
			} else if (Y == "1") {
				 return "2"
			} else if (Y == "2") {
				 return "1"
			} else if (Y == "3") {
				 return "2/3"
			} else if (Y == "4") {
				 return "0.5"
			} else if (Y == "5") {
				 return "0.4"
			} else if (Y == "6") {
				 return "2/6"
			}
		} else if (X == "3") {
			if (Y == "0") {
				 return "undefined"
			} else if (Y == "1") {
				 return "3"
			} else if (Y == "2") {
				 return "1.5"
			} else if (Y == "3") {
				 return "1"
			} else if (Y == "4") {
				 return "0.75"
			} else if (Y == "5") {
				 return "0.6"
			} else if (Y == "6") {
				 return "0.5"
			}
		} else if (X == "4") {
			if (Y == "0") {
				 return "undefined"
			} else if (Y == "1") {
				 return "4"
			} else if (Y == "2") {
				 return "2"
			} else if (Y == "3") {
				 return "4/3"
			} else if (Y == "4") {
				 return "1"
			} else if (Y == "5") {
				 return "0.8"
			} else if (Y == "6") {
				 return "4/6"
			}
		} else if (X == "5") {
			if (Y == "0") {
				 return "undefined"
			} else if (Y == "1") {
				 return "5"
			} else if (Y == "2") {
				 return "2.5"
			} else if (Y == "3") {
				 return "5/3"
			} else if (Y == "4") {
				 return "1.25"
			} else if (Y == "5") {
				 return "1"
			} else if (Y == "6") {
				 return "5/6"
			}
		} else if (X == "6") {
			if (Y == "0") {
				 return "undefined"
			} else if (Y == "1") {
				 return "6"
			} else if (Y == "2") {
				 return "3"
			} else if (Y == "3") {
				 return "2"
			} else if (Y == "4") {
				 return "1.5"
			} else if (Y == "5") {
				 return "1.2"
			} else if (Y == "6") {
				 return "1"
			}
		}
	} else if (Operand == "multiply") {
		if (X == "0") {
			if (Y == "0") {
				 return "0"
			} else if (Y == "1") {
				 return "0"
			} else if (Y == "2") {
				 return "0"
			} else if (Y == "3") {
				 return "0"
			} else if (Y == "4") {
				 return "0"
			} else if (Y == "5") {
				 return "0"
			} else if (Y == "6") {
				 return "0"
			}
		} else if (X == "1") {
			if (Y == "0") {
				 return "0"
			} else if (Y == "1") {
				 return "1"
			} else if (Y == "2") {
				 return "2"
			} else if (Y == "3") {
				 return "3"
			} else if (Y == "4") {
				 return "4"
			} else if (Y == "5") {
				 return "5"
			} else if (Y == "6") {
				 return "6"
			}
		} else if (X == "2") {
			if (Y == "0") {
				 return "0"
			} else if (Y == "1") {
				 return "2"
			} else if (Y == "2") {
				 return "4"
			} else if (Y == "3") {
				 return "6"
			} else if (Y == "4") {
				 return "8"
			} else if (Y == "5") {
				 return "10"
			} else if (Y == "6") {
				 return "12"
			}
		} else if (X == "3") {
			if (Y == "0") {
				 return "0"
			} else if (Y == "1") {
				 return "3"
			} else if (Y == "2") {
				 return "6"
			} else if (Y == "3") {
				 return "9"
			} else if (Y == "4") {
				 return "12"
			} else if (Y == "5") {
				 return "15"
			} else if (Y == "6") {
				 return "18"
			}
		} else if (X == "4") {
			if (Y == "0") {
				 return "0"
			} else if (Y == "1") {
				 return "4"
			} else if (Y == "2") {
				 return "8"
			} else if (Y == "3") {
				 return "12"
			} else if (Y == "4") {
				 return "16"
			} else if (Y == "5") {
				 return "20"
			} else if (Y == "6") {
				 return "24"
			}
		} else if (X == "5") {
			if (Y == "0") {
				 return "0"
			} else if (Y == "1") {
				 return "5"
			} else if (Y == "2") {
				 return "10"
			} else if (Y == "3") {
				 return "15"
			} else if (Y == "4") {
				 return "20"
			} else if (Y == "5") {
				 return "25"
			} else if (Y == "6") {
				 return "30"
			}
		} else if (X == "6") {
			if (Y == "0") {
				 return "0"
			} else if (Y == "1") {
				 return "6"
			} else if (Y == "2") {
				 return "12"
			} else if (Y == "3") {
				 return "18"
			} else if (Y == "4") {
				 return "24"
			} else if (Y == "5") {
				 return "30"
			} else if (Y == "6") {
				 return "36"
			}
		}
	}
}
function Fibonacci(n) {
	if (n == '0') {
		return '1'
	} else if (n == '1') {
		return '1'
	} else if (n == '2') {
		return '2'
	} else if (n == '3') {
		return '3'
	} else if (n == '4') {
		return '5'
	} else if (n == '5') {
		return '8'
	} else if (n == '6') {
		return '13'
	} else if (n == '7') {
		return '21'
	} else if (n == '8') {
		return '34'
	} else if (n == '9') {
		return '55'
	} else if (n == '10') {
		return '89'
	} else if (n == '11') {
		return '144'
	} else if (n == '12') {
		return '233'
	} else if (n == '13') {
		return '377'
	} else if (n == '14') {
		return '610'
	} else if (n == '15') {
		return '987'
	} else if (n == '16') {
		return '1597'
	} else if (n == '17') {
		return '2584'
	} else if (n == '18') {
		return '4181'
	} else if (n == '19') {
		return '6765'
	} else if (n == '20') {
		return '10946'
	} else if (n == '21') {
		return '17711'
	} else if (n == '22') {
		return '28657'
	} else if (n == '23') {
		return '46368'
	} else if (n == '24') {
		return '75025'
	} else if (n == '25') {
		return '121393'
	} else if (n == '26') {
		return '196418'
	} else if (n == '27') {
		return '317811'
	} else if (n == '28') {
		return '514229'
	} else if (n == '29') {
		return '832040'
	} else if (n == '30') {
		return '1346269'
	} else if (n == '31') {
		return '2178309'
	} else if (n == '32') {
		return '3524578'
	} else if (n == '33') {
		return '5702887'
	} else if (n == '34') {
		return '9227465'
	} else if (n == '35') {
		return '14930352'
	} else if (n == '36') {
		return '24157817'
	} else if (n == '37') {
		return '39088169'
	} else if (n == '38') {
		return '63245986'
	} else if (n == '39') {
		return '102334155'
	} else if (n == '40') {
		return '165580141'
	} else if (n == '41') {
		return '267914296'
	} else if (n == '42') {
		return '433494437'
	} else if (n == '43') {
		return '701408733'
	} else if (n == '44') {
		return '1134903170'
	} else if (n == '45') {
		return '1836311903'
	} else if (n == '46') {
		return '2971215073'
	} else if (n == '47') {
		return '4807526976'
	} else if (n == '48') {
		return '7778742049'
	} else if (n == '49') {
		return '12586269025'
	} else if (n == '50') {
		return '20365011074'
	} else if (n == '51') {
		return '32951280099'
	} else if (n == '52') {
		return '53316291173'
	} else if (n == '53') {
		return '86267571272'
	} else if (n == '54') {
		return '139583862445'
	} else if (n == '55') {
		return '225851433717'
	} else if (n == '56') {
		return '365435296162'
	} else if (n == '57') {
		return '591286729879'
	} else if (n == '58') {
		return '956722026041'
	} else if (n == '59') {
		return '1548008755920'
	} else if (n == '60') {
		return '2504730781961'
	} else if (n == '61') {
		return '4052739537881'
	} else if (n == '62') {
		return '6557470319842'
	} else if (n == '63') {
		return '10610209857723'
	} else if (n == '64') {
		return '17167680177565'
	} else if (n == '65') {
		return '27777890035288'
	} else if (n == '66') {
		return '44945570212853'
	} else if (n == '67') {
		return '72723460248141'
	} else if (n == '68') {
		return '117669030460994'
	} else if (n == '69') {
		return '190392490709135'
	} else if (n == '70') {
		return '308061521170129'
	} else if (n == '71') {
		return '498454011879264'
	} else if (n == '72') {
		return '806515533049393'
	} else if (n == '73') {
		return '1304969544928657'
	} else if (n == '74') {
		return '2111485077978050'
	} else if (n == '75') {
		return '3416454622906707'
	} else if (n == '76') {
		return '5527939700884757'
	} else if (n == '77') {
		return '8944394323791464'
	} else if (n == '78') {
		return '14472334024676220'
	} else if (n == '79') {
		return '23416728348467684'
	} else if (n == '80') {
		return '37889062373143900'
	} else if (n == '81') {
		return '61305790721611580'
	} else if (n == '82') {
		return '99194853094755490'
	} else if (n == '83') {
		return '160500643816367070'
	} else if (n == '84') {
		return '259695496911122560'
	} else if (n == '85') {
		return '420196140727489660'
	} else if (n == '86') {
		return '679891637638612200'
	} else if (n == '87') {
		return '1100087778366101900'
	} else if (n == '88') {
		return '1779979416004714000'
	} else if (n == '89') {
		return '2880067194370816000'
	} else if (n == '90') {
		return '4660046610375530000'
	} else if (n == '91') {
		return '7540113804746346000'
	} else if (n == '92') {
		return '12200160415121877000'
	} else if (n == '93') {
		return '19740274219868226000'
	} else if (n == '94') {
		return '31940434634990100000'
	} else if (n == '95') {
		return '51680708854858330000'
	} else if (n == '96') {
		return '83621143489848430000'
	} else if (n == '97') {
		return '135301852344706760000'
	} else if (n == '98') {
		return '218922995834555200000'
	} else if (n == '99') {
		return '354224848179262000000'
	} else if (n == '100') {
		return '573147844013817200000'
	} else if (n == '101') {
		return '927372692193079200000'
	} else if (n == '102') {
		return '1.5005205362068963e+21'
	} else if (n == '103') {
		return '2.4278932283999755e+21'
	} else if (n == '104') {
		return '3.9284137646068717e+21'
	} else if (n == '105') {
		return '6.356306993006848e+21'
	} else if (n == '106') {
		return '1.028472075761372e+22'
	} else if (n == '107') {
		return '1.6641027750620568e+22'
	} else if (n == '108') {
		return '2.6925748508234288e+22'
	} else if (n == '109') {
		return '4.356677625885486e+22'
	} else if (n == '110') {
		return '7.049252476708914e+22'
	} else if (n == '111') {
		return '1.14059301025944e+23'
	} else if (n == '112') {
		return '1.8455182579303315e+23'
	} else if (n == '113') {
		return '2.9861112681897715e+23'
	} else if (n == '114') {
		return '4.831629526120103e+23'
	} else if (n == '115') {
		return '7.817740794309875e+23'
	} else if (n == '116') {
		return '1.2649370320429978e+24'
	} else if (n == '117') {
		return '2.0467111114739851e+24'
	} else if (n == '118') {
		return '3.3116481435169827e+24'
	} else if (n == '119') {
		return '5.358359254990968e+24'
	} else if (n == '120') {
		return '8.670007398507951e+24'
	} else if (n == '121') {
		return '1.402836665349892e+25'
	} else if (n == '122') {
		return '2.269837405200687e+25'
	} else if (n == '123') {
		return '3.6726740705505786e+25'
	} else if (n == '124') {
		return '5.942511475751265e+25'
	} else if (n == '125') {
		return '9.615185546301844e+25'
	} else if (n == '126') {
		return '1.555769702205311e+26'
	} else if (n == '127') {
		return '2.5172882568354952e+26'
	} else if (n == '128') {
		return '4.0730579590408064e+26'
	} else if (n == '129') {
		return '6.590346215876301e+26'
	} else if (n == '130') {
		return '1.0663404174917107e+27'
	} else if (n == '131') {
		return '1.7253750390793408e+27'
	} else if (n == '132') {
		return '2.791715456571052e+27'
	} else if (n == '133') {
		return '4.5170904956503927e+27'
	} else if (n == '134') {
		return '7.308805952221445e+27'
	} else if (n == '135') {
		return '1.1825896447871837e+28'
	} else if (n == '136') {
		return '1.9134702400093282e+28'
	} else if (n == '137') {
		return '3.096059884796512e+28'
	} else if (n == '138') {
		return '5.009530124805841e+28'
	} else if (n == '139') {
		return '8.105590009602353e+28'
	} else if (n == '140') {
		return '1.3115120134408193e+29'
	} else if (n == '141') {
		return '2.1220710144010545e+29'
	} else if (n == '142') {
		return '3.4335830278418734e+29'
	} else if (n == '143') {
		return '5.5556540422429276e+29'
	} else if (n == '144') {
		return '8.989237070084801e+29'
	} else if (n == '145') {
		return '1.454489111232773e+30'
	} else if (n == '146') {
		return '2.353412818241253e+30'
	} else if (n == '147') {
		return '3.807901929474026e+30'
	} else if (n == '148') {
		return '6.161314747715279e+30'
	} else if (n == '149') {
		return '9.969216677189305e+30'
	} else if (n == '150') {
		return '1.6130531424904583e+31'
	} else if (n == '151') {
		return '2.6099748102093888e+31'
	} else if (n == '152') {
		return '4.223027952699847e+31'
	} else if (n == '153') {
		return '6.8330027629092365e+31'
	} else if (n == '154') {
		return '1.1056030715609085e+32'
	} else if (n == '155') {
		return '1.788903347851832e+32'
	} else if (n == '156') {
		return '2.8945064194127406e+32'
	} else if (n == '157') {
		return '4.683409767264573e+32'
	} else if (n == '158') {
		return '7.577916186677313e+32'
	} else if (n == '159') {
		return '1.2261325953941887e+33'
	} else if (n == '160') {
		return '1.98392421406192e+33'
	} else if (n == '161') {
		return '3.2100568094561087e+33'
	} else if (n == '162') {
		return '5.193981023518028e+33'
	} else if (n == '163') {
		return '8.404037832974137e+33'
	} else if (n == '164') {
		return '1.3598018856492165e+34'
	} else if (n == '165') {
		return '2.20020566894663e+34'
	} else if (n == '166') {
		return '3.5600075545958467e+34'
	} else if (n == '167') {
		return '5.760213223542477e+34'
	} else if (n == '168') {
		return '9.320220778138323e+34'
	} else if (n == '169') {
		return '1.50804340016808e+35'
	} else if (n == '170') {
		return '2.4400654779819122e+35'
	} else if (n == '171') {
		return '3.9481088781499925e+35'
	} else if (n == '172') {
		return '6.388174356131905e+35'
	} else if (n == '173') {
		return '1.0336283234281898e+36'
	} else if (n == '174') {
		return '1.6724457590413803e+36'
	} else if (n == '175') {
		return '2.70607408246957e+36'
	} else if (n == '176') {
		return '4.37851984151095e+36'
	} else if (n == '177') {
		return '7.08459392398052e+36'
	} else if (n == '178') {
		return '1.146311376549147e+37'
	} else if (n == '179') {
		return '1.854770768947199e+37'
	} else if (n == '180') {
		return '3.001082145496346e+37'
	} else if (n == '181') {
		return '4.855852914443544e+37'
	} else if (n == '182') {
		return '7.85693505993989e+37'
	} else if (n == '183') {
		return '1.2712787974383434e+38'
	} else if (n == '184') {
		return '2.0569723034323324e+38'
	} else if (n == '185') {
		return '3.328251100870676e+38'
	} else if (n == '186') {
		return '5.385223404303009e+38'
	} else if (n == '187') {
		return '8.713474505173684e+38'
	} else if (n == '188') {
		return '1.409869790947669e+39'
	} else if (n == '189') {
		return '2.2812172414650375e+39'
	} else if (n == '190') {
		return '3.691087032412707e+39'
	} else if (n == '191') {
		return '5.972304273877745e+39'
	} else if (n == '192') {
		return '9.663391306290452e+39'
	} else if (n == '193') {
		return '1.5635695580168196e+40'
	} else if (n == '194') {
		return '2.529908688645865e+40'
	} else if (n == '195') {
		return '4.0934782466626846e+40'
	} else if (n == '196') {
		return '6.623386935308549e+40'
	} else if (n == '197') {
		return '1.0716865181971233e+41'
	} else if (n == '198') {
		return '1.7340252117279783e+41'
	} else if (n == '199') {
		return '2.8057117299251016e+41'
	} else if (n == '200') {
		return '4.53973694165308e+41'
	} else if (n == '201') {
		return '7.34544867157818e+41'
	} else if (n == '202') {
		return '1.188518561323126e+42'
	} else if (n == '203') {
		return '1.923063428480944e+42'
	} else if (n == '204') {
		return '3.11158198980407e+42'
	} else if (n == '205') {
		return '5.034645418285014e+42'
	} else if (n == '206') {
		return '8.146227408089083e+42'
	} else if (n == '207') {
		return '1.3180872826374099e+43'
	} else if (n == '208') {
		return '2.1327100234463182e+43'
	} else if (n == '209') {
		return '3.450797306083728e+43'
	} else if (n == '210') {
		return '5.583507329530046e+43'
	} else if (n == '211') {
		return '9.034304635613775e+43'
	} else if (n == '212') {
		return '1.4617811965143821e+44'
	} else if (n == '213') {
		return '2.3652116600757594e+44'
	} else if (n == '214') {
		return '3.826992856590142e+44'
	} else if (n == '215') {
		return '6.192204516665901e+44'
	} else if (n == '216') {
		return '1.0019197373256042e+45'
	} else if (n == '217') {
		return '1.6211401889921942e+45'
	} else if (n == '218') {
		return '2.6230599263177984e+45'
	} else if (n == '219') {
		return '4.2442001153099927e+45'
	} else if (n == '220') {
		return '6.86726004162779e+45'
	} else if (n == '221') {
		return '1.1111460156937784e+46'
	} else if (n == '222') {
		return '1.7978720198565574e+46'
	} else if (n == '223') {
		return '2.9090180355503355e+46'
	} else if (n == '224') {
		return '4.706890055406893e+46'
	} else if (n == '225') {
		return '7.615908090957229e+46'
	} else if (n == '226') {
		return '1.2322798146364122e+47'
	} else if (n == '227') {
		return '1.993870623732135e+47'
	} else if (n == '228') {
		return '3.2261504383685474e+47'
	} else if (n == '229') {
		return '5.2200210621006825e+47'
	} else if (n == '230') {
		return '8.44617150046923e+47'
	} else if (n == '231') {
		return '1.3666192562569911e+48'
	} else if (n == '232') {
		return '2.2112364063039142e+48'
	} else if (n == '233') {
		return '3.577855662560905e+48'
	} else if (n == '234') {
		return '5.7890920688648195e+48'
	} else if (n == '235') {
		return '9.366947731425724e+48'
	} else if (n == '236') {
		return '1.5156039800290544e+49'
	} else if (n == '237') {
		return '2.452298753171627e+49'
	} else if (n == '238') {
		return '3.967902733200681e+49'
	} else if (n == '239') {
		return '6.420201486372308e+49'
	} else if (n == '240') {
		return '1.0388104219572989e+50'
	} else if (n == '241') {
		return '1.6808305705945297e+50'
	} else if (n == '242') {
		return '2.7196409925518287e+50'
	} else if (n == '243') {
		return '4.400471563146358e+50'
	} else if (n == '244') {
		return '7.120112555698187e+50'
	} else if (n == '245') {
		return '1.1520584118844544e+51'
	} else if (n == '246') {
		return '1.864069667454273e+51'
	} else if (n == '247') {
		return '3.016128079338727e+51'
	}
}

module.exports = {
	Calculate: Calculate,
	Fibonacci: Fibonacci
}
