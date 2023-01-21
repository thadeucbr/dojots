function teste(data11, data22) {
  const data1 = new Date(data11).toISOString()
  const data2 = new Date(data22).toISOString()
  if(data11 > data22) return true
  return false;
}

function teste2(data1, data2) {
    const checkIn = new Date().toISOString();
    const startDate = new Date(data1).toISOString();
    const endDate = new Date(data2).toISOString();
    if(checkIn >= startDate && checkIn <= endDate) {
        console.log('pode fazer checkin');
    }else{
        console.log('não pode');
    }
}

teste2('01/19/2023', '01/29/2023');