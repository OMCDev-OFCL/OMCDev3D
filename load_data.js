var firebaseConfig = {    
    databaseURL: "https://omcdev-10317.firebaseio.com"
};
firebase.initializeApp(firebaseConfig);
function inst(unity_inst)
{    
    firebase.database().ref('/Projects').once('value',function(snapshot)
    {
        snapshot.forEach(function(childSnapshot)
        {
            var childkey = childSnapshot.key;
            var childdata = childSnapshot.val();
            let new_item =
            {
                'key' : childkey,
                'data' : childdata
            }
            unity_inst.SendMessage('data_loader','set_ptitle',new_item.data['ptitle'].toString());
            unity_inst.SendMessage('data_loader','set_psno',new_item.data['psno'].toString());
            unity_inst.SendMessage('data_loader','set_pshortds',new_item.data['pshortds'].toString());
            unity_inst.SendMessage('data_loader','set_plstore',new_item.data['plstore'].toString());            
            unity_inst.SendMessage('data_loader','set_plongds',new_item.data['plongds'].toString());
            unity_inst.SendMessage('data_loader','set_picolink',new_item.data['picolink'].toString());
            unity_inst.SendMessage('data_loader','set_pbnrlink',new_item.data['pbnrlink'].toString());
            unity_inst.SendMessage('data_loader','set_Previewlink',new_item.data['Previewlink'].toString());
            unity_inst.SendMessage('data_loader','add_temp');
        });
        firebase.database().ref('/contributors').once('value',function(snapshot){
            snapshot.forEach(function(childSnapshot){
                var childkey = childSnapshot.key;
                var childdata = childSnapshot.val();
                let new_item =
                {
                    'key' : childkey,
                    'data' : childdata
                }
                unity_inst.SendMessage('data_loader','set_ctitle',new_item.data['ctitle'].toString());
                console.log("person : " + new_item.data['ctitle'].toString());
                unity_inst.SendMessage('data_loader','set_cno',new_item.data['cno'].toString());
                unity_inst.SendMessage('data_loader','set_cshortds',new_item.data['cshortds'].toString());
                unity_inst.SendMessage('data_loader','set_cicolink',new_item.data['cicolink'].toString());
                unity_inst.SendMessage('data_loader','set_clink',new_item.data['clink'].toString());
                unity_inst.SendMessage('data_loader','add_temp_contrib');
            });
            unity_inst.SendMessage('data_loader','generat_platform');     
        });              
    });
    
}