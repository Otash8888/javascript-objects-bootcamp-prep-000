var playlist = {
jackson:moonwalk,

}
function updatePlaylist(object,artName,song){
  //object[artName]=song
  return Object.assign(object,{[artName]:song})
}
function removeFromPlaylist(object,artName){
  
  return delete object[artName];
}