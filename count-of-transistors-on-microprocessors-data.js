var data = [
{processor: "TMS 1000", count:	8000, year: 1971, designer:	"Texas Instruments", process:"8 μm", area:"	"},
{processor: "Intel 4004", count:	2300, year:	1971, designer:	"Intel", process:"10 µm", area:"12 mm²"},
{processor: "Intel 8008", count:	3500, year:	1972, designer:	"Intel", process:"10 µm", area:"14 mm²"},
{processor: "MOS Technology 6502", count:	3510, year:	1975, designer:	"MOS Technology", process:"8 μm", area:"21 mm²"},
{processor: "Motorola 6800", count:	4100, year:	1974, designer:	"Motorola", process:"6 μm", area:"16 mm²"},
{processor: "Intel 8080", count:	4500, year:	1974, designer:	"Intel", process:"6 μm", area:"20 mm²"},
{processor: "RCA 1802", count:	5000, year:	1974, designer:	"RCA", process:"5 μm", area:"27 mm²"},
{processor: "Intel 8085", count:	6500, year:	1976, designer:	"Intel", process:"3 μm", area:"20 mm²"},
{processor: "Zilog Z80", count:	8500, year:	1976, designer:	"Zilog", process:"4 μm", area:"18 mm²"},
{processor: "Motorola 6809", count:	9000, year:	1978, designer:	"Motorola", process:"5 μm", area:"21 mm²"},
{processor: "Intel 8086", count:	29000, year:	1978, designer:	"Intel", process:"3 μm", area:"33 mm²"},
{processor: "Intel 8088", count:	29000, year:	1979, designer:	"Intel", process:"3 μm", area:"33 mm²"},
{processor: "WDC 65C02", count:	11500, year:	1981, designer:	"WDC", process:"3 µm", area:"6 mm²"},
{processor: "Intel 80186", count:	55000, year:	1982, designer:	"Intel", process:"3 μm", area:"60 mm²"},
{processor: "Motorola 68000", count:	68000, year:	1979, designer:	"Motorola", process:"3.5 μm", area:"44 mm²"},
{processor: "Intel 80286", count:	134000, year:	1982, designer:	"Intel", process:"1.5 µm", area:"49 mm²"},
{processor: "WDC 65C816", count:	22000, year:	1983, designer:	"WDC", process:" ", area:"9 mm²"},
{processor: "Motorola 68020", count:	190000, year:	1984, designer:	"Motorola", process:"2 μm", area:"85 mm²"},
{processor: "Intel 80386", count:	275000, year:	1985, designer:	"Intel", process:"1.5 µm", area:"104 mm²"},
{processor: "ARM 1", count:	25000, year:	1985, designer:	"Acorn", process:"3 μm", area:"50 mm²"},
{processor: "Novix NC4016", count:	16000, year:	1985, designer:	"Harris Corporation", process:"3 μm"},
{processor: "ARM 2", count:	25000, year:	1986, designer:	"Acorn", process:"2 μm", area:"30 mm²"},
{processor: "TI Explorer's 32-bit Lisp machine chip", count:	553000, year:	1987, designer:	"Texas Instruments", process:" ", area:" "},		
{processor: "DEC WRL MultiTitan", count:	180000, year:	1988, designer:	"DEC WRL", process:"1.5 μm	6.98mm X 8.73mm", area:" "},
{processor: "Intel i960", count:	250000, year:	1988, designer:	"Intel", process:"0.6 µm", area:" "},	
{processor: "Intel 80486", count:	1180235, year:	1989, designer:	"Intel", process:"1 µm", area:"173 mm²"},
{processor: "ARM 3", count:	300000, year:	1989, designer:	"Acorn", process:" ", area:" "},		
{processor: "R4000", count:	1350000, year:	1991, designer:	"MIPS", process:"1.0 µm", area:"213 mm²"},
{processor: "ARM 6", count:	30000, year:	1991, designer:	"ARM", process:" ", area:" "},		
{processor: "Pentium", count:	3100000, year:	1993, designer:	"Intel", process:"0.8 µm", area:"294 mm²"},
{processor: "ARM700", count:	578977, year:	1994, designer:	"ARM", process:" ", area:"68.51 mm²"},
{processor: "SA-110", count:	2500000, year:	1995, designer:	"Acorn/DEC/Apple", process:"0.35 μm", area:"50 mm²"},
{processor: "ARM 9TDMI", count:	111000, year:	1999, designer:	"Acorn", process:"0.35 μm", area:"4.8 mm²"},
{processor: "Pentium Pro", count:	5500000, year:	1995, designer:	"Intel", process:"0.5 µm", area:"307 mm²"},
{processor: "AMD K5", count:	4300000, year:	1996, designer:	"AMD", process:"0.5 µm", area:"251 mm²"},
{processor: "Pentium II Klamath", count:	7500000, year:	1997, designer:	"Intel", process:"0.35 µm", area:"195 mm²"},
{processor: "Pentium II Deschutes", count:	7500000, year:	1998, designer:	"Intel", process:"0.25 µm", area:"113 mm²"},
{processor: "AMD K6", count:	8800000, year: 1997 , designer:	"AMD", process:"0.35 µm", area:"162 mm²"},
{processor: "Pentium III Katmai", count:	9500000, year:	1999, designer:	"Intel", process:"0.25 µm", area:"128 mm²"},
{processor: "Pentium III Coppermine", count:	21000000, year:	2000, designer:	"Intel", process:"180 nm", area:"80 mm²"},
{processor: "Pentium II Mobile Dixon", count:	27400000, year:	1999, designer:	"Intel", process:"180 nm", area:"180 mm²"},
{processor: "Pentium III Tualatin", count:	45000000, year:	2001, designer:	"Intel", process:"130 nm", area:"81 mm²"},
{processor: "AMD K6-III", count:	21300000, year:	1999, designer:	"AMD", process:"0.25 µm", area:"118 mm²"},
{processor: "AMD K7", count:	22000000, year:	1999, designer:	"AMD", process:"0.25 µm", area:"184 mm²"},
{processor: "Pentium 4 Willamette", count:	42000000, year:	2000, designer:	"Intel", process:"180 nm", area:"217 mm²"},
{processor: "Pentium 4 Northwood", count:	55000000, year:	2002, designer:	"Intel", process:"130 nm", area:"145 mm²"},
{processor: "Pentium 4 Prescott", count:	112000000, year:	2004, designer:	"Intel", process:"90 nm", area:"110 mm²"},
{processor: "Pentium 4 Prescott-2M", count:	169000000, year:	2005, designer:	"Intel", process:"90 nm", area:"143 mm²"},
{processor: "Pentium 4 Cedar Mill", count:	184000000, year:	2006, designer:	"Intel", process:"65 nm", area:"90 mm²"},
{processor: "Atom", count:	47000000, year:	2008, designer:	"Intel", process:"45 nm", area:"24 mm²"},
{processor: "Barton", count:	54300000, year:	2003, designer:	"AMD", process:"130 nm", area:"101 mm²"},
{processor: "AMD K8", count:	105900000, year:	2003, designer:	"AMD", process:"130 nm", area:"193 mm²"},
{processor: "Itanium 2 McKinley", count:	220000000, year:	2002, designer:	"Intel", process:"180 nm", area:"421 mm²"},
{processor: "Cell", count:	241000000, year:	2006, designer:	"Sony/IBM/Toshiba", process:"90 nm", area:"221 mm²"},
{processor: "Core 2 Duo Conroe", count:	291000000, year:	2006, designer:	"Intel", process:"65 nm", area:"143 mm²"},
{processor: "Core 2 Duo Allendale", count:	169000000, year:	2007, designer:	"Intel", process:"65 nm", area:"111 mm²"},
{processor: "Itanium 2 Madison 6M", count:	410000000, year:	2003, designer:	"Intel", process:"130 nm", area:"374 mm²"},
{processor: "AMD K10 quad-core 2M L3", count:	463000000, year:	2007, designer:	"AMD", process:"65 nm", area:"283 mm²"},
{processor: "ARM Cortex-A9", count:	26000000, year:	2007, designer:	"ARM", process:" ", area:" "},		
{processor: "Core 2 Duo Wolfdale3M", count:	230000000, year:	2008, designer:	"Intel", process:"45 nm", area:"83 mm²"},
{processor: "Itanium 2 with 9 MB cache", count:	592000000, year:	2004, designer:	"Intel", process:"130 nm", area:"432 mm²"},
{processor: "Core 2 Duo Wolfdale", count:	411000000, year:	2007, designer:	"Intel", process:"45 nm", area:"107 mm²"},
{processor: "Core i7 (Quad)", count:	731000000, year:	2008, designer:	"Intel", process:"45 nm", area:"263 mm²"},
{processor: "AMD K10 quad-core 6M L3", count:	758000000, year:	2008, designer:	"AMD", process:"45 nm", area:"258 mm²"},
{processor: "POWER6", count:	789000000, year:	2007, designer:	"IBM", process:"65 nm", area:"341 mm²"},
{processor: "Six-core Opteron 2400", count:	904000000, year:	2009, designer:	"AMD", process:"45 nm", area:"346 mm²"},
{processor: "16-core SPARC T3", count:	1000000000, year:	2010, designer:	"Sun/Oracle", process:"40 nm", area:"377 mm²"},
{processor: "Apple A7 (dual-core ARM64 mobile SoC)", count:	1000000000, year:	2013, designer:	"Apple", process:"28 nm", area:"102 mm²"},
{processor: "Quad-core + GPU Core i7", count:	1160000000, year:	2011, designer:	"Intel", process:"32 nm", area:"216 mm²"},
{processor: "Six-core Core i7 (Gulftown)", count:	1170000000, year:	2010, designer:	"Intel", process:"32 nm", area:"240 mm²"},
{processor: "8-core POWER7 32M L3", count:	1200000000, year:	2010, designer:	"IBM", process:"45 nm", area:"567 mm²"},
{processor: "8-core AMD Bulldozer", count:	1200000000, year:	2012, designer:	"AMD", process:"32 nm", area:"315 mm²"},
{processor: "Quad-core + GPU AMD Trinity", count:	1303000000, year:	2012, designer:	"AMD", process:"32 nm", area:"246 mm²"},
{processor: "Quad-core z196", count:	1400000000, year:	2010, designer:	"IBM", process:"45 nm", area:"512 mm²"},
{processor: "Quad-core + GPU Core i7 Ivy Bridge", count:	1400000000, year:	2012, designer:	"Intel", process:"22 nm", area:"160 mm²"},
{processor: "Quad-core + GPU Core i7 Haswell", count:	1400000000, year:	2014, designer:	"Intel", process:"22 nm", area:"177 mm²"},
{processor: "Dual-core Itanium 2", count:	1700000000, year:	2006, designer:	"Intel", process:"90 nm", area:"596 mm²"},
{processor: "Six-core Core i7 Ivy Bridge E", count:	1860000000, year:	2013, designer:	"Intel", process:"22 nm", area:"256 mm²"},
{processor: "Duo-core + GPU Core i7 Broadwell-U", count:	1900000000, year:	2015, designer:	"Intel", process:"14 nm", area:"133 mm²"},
{processor: "Six-core Xeon 7400", count:	1900000000, year:	2008, designer:	"Intel", process:"45 nm", area:"503 mm²"},
{processor: "Quad-core Itanium Tukwila", count:	2000000000, year:	2010, designer:	"Intel", process:"65 nm", area:"699 mm²"},
{processor: "Apple A8 (dual-core ARM64 mobile SoC)", count:	2000000000, year:	2014, designer:	"Apple", process:"20 nm", area:"89 mm²"},
{processor: "8-core POWER7+ 80 MB L3 cache", count:	2100000000, year:	2012, designer:	"IBM", process:"32 nm", area:"567 mm²"},
{processor: "Six-core Core i7/8-core Xeon E5 (Sandy Bridge-E/EP)", count:	2270000000, year:	2011, designer:	"Intel", process:"32 nm", area:"434 mm²"},
{processor: "8-core Xeon Nehalem-EX", count:	2300000000, year:	2010, designer:	"Intel", process:"45 nm", area:"684 mm²"},
{processor: "8-core Core i7 Haswell-E", count:	2600000000, year:	2014, designer:	"Intel", process:"22 nm", area:"355 mm²"},
{processor: "10-core Xeon Westmere-EX", count:	2600000000, year:	2011, designer:	"Intel", process:"32 nm", area:"512 mm²"},
{processor: "Six-core zEC12", count:	2750000000, year:	2012, designer:	"IBM", process:"32 nm", area:"597 mm²"},
{processor: "Apple A8X (tri-core ARM64 mobile SoC)", count:	3000000000, year:	2014, designer:	"Apple", process:"20 nm", area:"128 mm²"},
{processor: "8-core Itanium Poulson", count:	3100000000, year:	2012, designer:	"Intel", process:"32 nm", area:"544 mm²"},
{processor: "IBM z13", count:	3990000000, year:	2015, designer:	"IBM", process:"22 nm", area:"678 mm²"},
{processor: "12-core POWER8", count:	4200000000, year:	2013, designer:	"IBM", process:"22 nm", area:"650 mm²"},
{processor: "15-core Xeon Ivy Bridge-EX", count:	4310000000, year:	2014, designer:	"Intel", process:"22 nm", area:"541 mm²"},
{processor: "61-core Xeon Phi", count:	5000000000, year:	2012, designer:	"Intel", process:"22 nm", area:"350 mm²"},
{processor: "Xbox One main SoC", count:	5000000000, year:	2013, designer:	"Microsoft/AMD", process:"28 nm", area:"363 mm²"},
{processor: "18-core Xeon Haswell-E5", count:	5560000000, year:	2014, designer:	"Intel", process:"22 nm", area:"661 mm²"},
{processor: "IBM z13 Storage Controller", count:	7100000000, year:	2015, designer:	"IBM", process:"22 nm", area:"678 mm²"}
]
