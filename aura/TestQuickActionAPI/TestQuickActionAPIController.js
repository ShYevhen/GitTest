({
	change : function(cmp, event, helper) {
		var actionAPI = cmp.find("quickActionAPI");
        var fields = {Name: {value: cmp.get("v.testText")}};
        var args = {actionName: "Account.UpdateAccount", entityName: "Account", targetFields: fields, recordId: cmp.get("v.recordId")};
        actionAPI.setActionFieldValues(args).then(function(){
            actionAPI.invokeAction(args);
        }).catch(function(e){
            console.error(e.errors);
        });
	}
})