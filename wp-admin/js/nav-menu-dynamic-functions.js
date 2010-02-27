function wp_update_links_list(e){var link='<li><dl><dt><label class="item-title"><input type="checkbox" id="link-'+e.link_id+'" name="'+e.link_name+'" value="'+e.link_url+'" />'+e.link_name+"</label></dt></dl></li>";jQuery("#available-links .list").prepend(link);jQuery("#available-links .list #link-"+e.link_id).parent().animate({backgroundColor:"#FFFF33"},{duration:"normal",complete:function(){jQuery(this).css("backgroundColor","")}})}function wp_remove_menu_item(o){var todelete=document.getElementById("menu-"+o);if(todelete){jQuery(todelete).find("dt").each(function(){jQuery(this).animate({backgroundColor:"#FF3333"},{duration:"normal",complete:function(){jQuery(this).parent().parent().remove()}})});wp_update_post_data()}}function wp_edit_menu_item(id){console.log("wp_edit_menu_item");var itemTitle=jQuery("#item-title"+id).val();var itemURL=jQuery("#item-url"+id).val();var itemAttrTitle=jQuery("#item-attr-title"+id).val();var itemTarget=jQuery("#item-target"+id).val();var itemDesc=jQuery("#item-description"+id).val();console.log(id);console.log(itemTitle);console.log(itemURL);console.log(itemAttrTitle);console.log(itemTarget);console.log(itemDesc);jQuery("#edit-item-id").val(id);jQuery("#edit-item-title").val(itemTitle);jQuery("#edit-item-url").val(itemURL);jQuery("#edit-item-attr-title").val(itemAttrTitle);jQuery("#edit-item-target").val(itemTarget);jQuery("#edit-item-target option[value='"+itemTarget+"']").attr("selected","selected");jQuery("#edit-item-description").val(itemDesc)}function wp_update_menu_item(){var id=jQuery("#edit-item-id").val();var itemTitle=jQuery("#edit-item-title").val();var itemURL=jQuery("#edit-item-url").val();var itemAttrTitle=jQuery("#edit-item-attr-title").val();var itemTarget=jQuery("#edit-item-target").val();var itemDesc=jQuery("#edit-item-description").val();console.log(id);console.log(itemTitle);console.log(itemURL);console.log(itemAttrTitle);console.log(itemTarget);console.log(itemDesc);jQuery("#menu-"+id).find(".item-title:first").html(itemTitle);jQuery("#item-title"+id).val(itemTitle);jQuery("#item-url"+id).val(itemURL);jQuery("#item-attr-title"+id).val(itemAttrTitle);jQuery("#item-target"+id).val(itemTarget);jQuery("#item-description"+id).val(itemDesc)}function wp_update_post_data(){var i=0;jQuery("#menu li").each(function(i){i=i+1;var j=jQuery(this).attr("value");jQuery(this).find("#position"+j).attr("value",i);jQuery(this).attr("id","menu-"+i);jQuery(this).attr("value",i);jQuery(this).find("#dbid"+j).attr("name","dbid"+i);jQuery(this).find("#dbid"+j).attr("id","dbid"+i);jQuery(this).find("#postmenu"+j).attr("name","postmenu"+i);jQuery(this).find("#postmenu"+j).attr("id","postmenu"+i);var p=jQuery(this).find("#parent"+j).parent().parent().parent().attr("value");jQuery(this).find("#parent"+j).attr("name","parent"+i);jQuery(this).find("#parent"+j).attr("id","parent"+i);if(p){}else{p=0}jQuery(this).find("#parent"+j).attr("value",p);jQuery(this).find("#item-title"+j).attr("name","item-title"+i);jQuery(this).find("#item-title"+j).attr("id","item-title"+i);jQuery(this).find("#item-url"+j).attr("name","item-url"+i);jQuery(this).find("#item-url"+j).attr("id","item-url"+i);jQuery(this).find("#item-description"+j).attr("name","item-description"+i);jQuery(this).find("#item-description"+j).attr("id","item-description"+i);jQuery(this).find("#item-attr-title"+j).attr("name","item-attr-title"+i);jQuery(this).find("#item-attr-title"+j).attr("id","item-attr-title"+i);jQuery(this).find("#item-target"+j).attr("name","item-target"+i);jQuery(this).find("#item-target"+j).attr("id","item-target"+i);jQuery(this).find("#position"+j).attr("name","position"+i);jQuery(this).find("#position"+j).attr("id","position"+i);jQuery(this).find("#linktype"+j).attr("name","linktype"+i);jQuery(this).find("#linktype"+j).attr("id","linktype"+i);jQuery("#li-count").attr("value",i)})}function wp_add_item_to_menu(additemtype,itemtext,itemurl,itemid,itemparentid,itemdescription){var inputvaluevarname="";var inputvaluevarurl="";var inputitemid="";var inputparentid="";var inputdescription="";var randomnumber=wp_get_unique_menu_id();inputvaluevarname=htmlentities(itemtext.toString());inputvaluevarurl=itemurl.toString();inputitemid=itemid;inputparentid=itemparentid;inputlinktype="custom";inputdescription=htmlentities(itemdescription.toString());jQuery("#menu").append('<li id="menu-'+randomnumber+'" value="'+randomnumber+'"><div class="dropzone ui-droppable"></div><dl class="ui-droppable"><dt><span class="item-title">'+inputvaluevarname+'</span><span class="item-controls"><span class="item-type">'+additemtype+'</span><a class="item-edit thickbox" id="edit'+randomnumber+'" value="'+randomnumber+'" onClick="wp_edit_menu_item('+randomnumber+')" title="'+navMenuL10n.thickbox+'" href="#TB_inline?height=380&width=300&inlineId=menu-item-settings">'+navMenuL10n.edit+'</a> | <a class="item-delete" id="delete'+randomnumber+'" value="'+randomnumber+'">Delete</a></span></dt></dl><a class="hide" href="'+inputvaluevarurl+'">'+inputvaluevarname+'</a><input type="hidden" name="postmenu'+randomnumber+'" id="postmenu'+randomnumber+'" value="'+inputitemid+'" /><input type="hidden" name="parent'+randomnumber+'" id="parent'+randomnumber+'" value="'+inputparentid+'" /><input type="hidden" name="item-title'+randomnumber+'" id="item-title'+randomnumber+'" value="'+inputvaluevarname+'" /><input type="hidden" name="item-url'+randomnumber+'" id="item-url'+randomnumber+'" value="'+inputvaluevarurl+'" /><input type="hidden" name="item-description'+randomnumber+'" id="item-description'+randomnumber+'" value="'+inputdescription+'" /><input type="hidden" name="position'+randomnumber+'" id="position'+randomnumber+'" value="'+randomnumber+'" /><input type="hidden" name="linktype'+randomnumber+'" id="linktype'+randomnumber+'" value="'+inputlinktype+'" /><input type="hidden" name="item-attr-title'+randomnumber+'" id="item-attr-title'+randomnumber+'" value="'+inputvaluevarname+'" /><input type="hidden" name="item-target'+randomnumber+'" id="item-target'+randomnumber+'" value="0" /></li>');jQuery("#menu #menu-"+randomnumber+" dt:first").animate({backgroundColor:"#FFFF33"},{duration:"normal",complete:function(){jQuery(this).css("backgroundColor","")}});wp_drag_and_drop();tb_init("a.thickbox, area.thickbox, input.thickbox")}function wp_update_queue(additemtype,itemtext,itemurl,itemid,itemparentid,itemdescription){var inputvaluevarname="";var inputvaluevarurl="";var inputitemid="";var inputparentid="";var inputdescription="";var randomnumber=wp_get_unique_menu_id();if(additemtype==navMenuL10n.page){inputvaluevarname=htmlentities(itemtext.toString());inputvaluevarurl=itemurl.toString();inputitemid=itemid.toString();inputparentid="0";inputlinktype="page";inputdescription=htmlentities(itemdescription.toString())}else{if(additemtype==navMenuL10n.category){inputvaluevarname=htmlentities(itemtext.toString());inputvaluevarurl=itemurl.toString();inputitemid=itemid.toString();inputparentid="0";inputlinktype="category";inputdescription=htmlentities(itemdescription.toString())}}if(jQuery(menu_item_id="#menu-item-"+inputitemid).attr("checked")){jQuery("#queue").append('<li id="menu-'+randomnumber+'" value="'+randomnumber+'"><div class="dropzone ui-droppable"></div><dl class="ui-droppable"><dt><span class="item-title">'+inputvaluevarname+'</span><span class="item-controls"><span class="item-type">'+additemtype+'</span><a class="item-edit thickbox" id="edit'+randomnumber+'" value="'+randomnumber+'" onClick="wp_edit_menu_item('+randomnumber+')" title="'+navMenuL10n.thickbox+'" href="#TB_inline?height=380&width=300&inlineId=menu-item-settings">'+navMenuL10n.edit+'</a> | <a class="item-delete" id="delete'+randomnumber+'" value="'+randomnumber+'">Delete</a></span></dt></dl><a class="hide" href="'+inputvaluevarurl+'">'+inputvaluevarname+'</a><input type="hidden" name="postmenu'+randomnumber+'" id="postmenu'+randomnumber+'" value="'+inputitemid+'" /><input type="hidden" name="parent'+randomnumber+'" id="parent'+randomnumber+'" value="'+inputparentid+'" /><input type="hidden" name="item-title'+randomnumber+'" id="item-title'+randomnumber+'" value="'+inputvaluevarname+'" /><input type="hidden" name="item-url'+randomnumber+'" id="item-url'+randomnumber+'" value="'+inputvaluevarurl+'" /><input type="hidden" name="item-description'+randomnumber+'" id="item-description'+randomnumber+'" value="'+inputdescription+'" /><input type="hidden" name="position'+randomnumber+'" id="position'+randomnumber+'" value="'+randomnumber+'" /><input type="hidden" name="linktype'+randomnumber+'" id="linktype'+randomnumber+'" value="'+inputlinktype+'" /><input type="hidden" name="item-attr-title'+randomnumber+'" id="item-attr-title'+randomnumber+'" value="'+inputvaluevarname+'" /><input type="hidden" name="item-target'+randomnumber+'" id="item-target'+randomnumber+'" value="0" /></li>')}else{for(var i=0;i<jQuery('#queue li input[name^="postmenu"]').length;i++){if(itemid==jQuery('#queue li input[name^="postmenu"]')[i].value){var menu_queue_id=jQuery('#queue li input[name^="postmenu"]')[i].name.substring(8,jQuery('#queue li input[name^="postmenu"]')[i].name.length)}}jQuery("#queue li#menu-"+menu_queue_id).remove()}}function wp_add_queued_items_to_menu(button){var items=jQuery("#queue").children();jQuery("#queue").empty();jQuery("#menu").append(items);jQuery(items).each(function(){jQuery(this).find("dt").animate({backgroundColor:"#FFFF33"},{duration:"normal",complete:function(){jQuery(this).css("backgroundColor","")}})});jQuery(button).offsetParent().find(".list-container input").attr("checked",false);wp_update_post_data();wp_drag_and_drop();tb_init("a.thickbox, area.thickbox, input.thickbox")}function wp_drag_and_drop(){jQuery("#menu li").draggable({handle:" > dl",opacity:0.8,addClasses:false,helper:"clone",zIndex:100});jQuery("#menu li dl, #menu li .dropzone").droppable({accept:"#menu li",tolerance:"pointer",drop:function(e,ui){var li=jQuery(this).parent();var child=!jQuery(this).hasClass("dropzone");if(child&&li.children("ul").length==0){li.append("<ul/>")}if(child){li.children("ul").append(ui.draggable)}else{li.before(ui.draggable)}li.find("dl,.dropzone").css({backgroundColor:"",borderColor:""});var draggablevalue=ui.draggable.attr("value");var droppablevalue=li.attr("value");li.find("#menu-"+draggablevalue).find("#parent"+draggablevalue).val(droppablevalue);jQuery(this).parent().find("dt").removeAttr("style");jQuery(this).parent().find("div:first").removeAttr("style")},over:function(){if(jQuery(this).attr("class")=="dropzone ui-droppable"){jQuery(this).parent().find("div:first").css("background","none").css("height","50px")}else{if(jQuery(this).attr("class")=="ui-droppable"){jQuery(this).parent().find("dt:first").css("background","#d8d8d8")}else{}}var parentid=jQuery(this).parent().attr("id")},out:function(){jQuery(this).parent().find("dt").removeAttr("style");jQuery(this).parent().find("div:first").removeAttr("style");jQuery(this).filter(".dropzone").css({borderColor:""})}})}function wp_get_unique_menu_id(){var count=document.getElementById("menu").getElementsByTagName("li").length+1;var randomnumber=count;var validatetest=0;try{var test=document.getElementById("menu-"+randomnumber.toString()).value}catch(err){validatetest=1}while(validatetest==0){randomnumber=randomnumber+1;try{var test2=document.getElementById("menu-"+randomnumber.toString()).value}catch(err){validatetest=1}}return randomnumber};