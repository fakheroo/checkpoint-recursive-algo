function leapYear(year){
    if((year%4===0 && year%100!== 0)||(year%400===0)){
        console.log (`L'année ${year} est bissextile  `)
    }else {
        console.log (`L'année ${year} n'est pas bissextile  `)
    }
}
leapYear(2024)
leapYear(2020)
leapYear(2018)