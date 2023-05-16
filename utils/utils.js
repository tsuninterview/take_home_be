function filterData(data) {
  if (data.recentHour) {
    delete data.recentHour
  }
  if (data.indexDonneePlusRecent) {
    delete data.indexDonneePlusRecent
  }
  if (data.nbDateAvecData) {
    delete data.nbDateAvecData
  }
  data.details = data.details?.filter((element) => {
    if (element.valeurs?.total) {
      return element.valeurs?.total !== 0
    }
    if (element.valeurs?.demandeTotal) {
      return element.valeurs?.demandeTotal !== 0
    }
    return false
  })
  return data
}
module.exports = { filterData }
