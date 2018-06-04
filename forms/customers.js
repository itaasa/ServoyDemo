
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FC38E4C7-2FC8-4133-90E0-12C979F26348"}
 */
function nextRecord(event) {
	
	var nextCustomer = controller.getSelectedIndex() + 1;
	controller.setSelectedIndex(nextCustomer);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7D2207C7-2F67-4C4A-B105-A1B5AA2AE777"}
 */
function prevForm(event) {
	
	if (controller.getSelectedIndex() > 1){
		var nextCustomer = controller.getSelectedIndex() - 1;
		controller.setSelectedIndex(nextCustomer);
	}
}



/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5C893544-C651-43EB-9E41-C7BBA7CB2F83"}
 */
function firstRecord(event) {
	controller.setSelectedIndex(1);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C3BFA104-5AD7-470A-B42E-453EF03F94D2"}
 */
function lastRecord(event) {
	controller.setSelectedIndex(controller.getMaxRecordIndex());
}
