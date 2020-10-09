function vuxalert(n, i, b) { 

    var r, u;

    r = '<div class="weui_dialog_alert" style="position: fixed; z-index: 2000; display: none;margin-left:15%;margin-right:15%">';

    r += '<div class="weui_mask"><\/div>';

    r += '<div class="weui_dialog">';

    r += '<i class="weui_close"><svg t="1540783423798" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="s="http://www.w3.org/2000/svg" p-" p-id="1931" xmlns:xlink="k="http://www.w3.org/1999/xlink" wi" width="25" height="25"><path style="fill:#666;" d="M176.661601 817.172881C168.472798 825.644055 168.701706 839.149636 177.172881 847.338438 185.644056 855.527241 199.149636 855.298332 207.338438 846.827157L826.005105 206.827157C834.193907 198.355983 833.964998 184.850403 825.493824 176.661601 817.02265 168.472798 803.517069 168.701706 795.328267 177.172881L176.661601 817.172881ZM795.328267 846.827157C803.517069 855.298332 817.02265 855.527241 825.493824 847.338438 833.964998 839.149636 834.193907 825.644055 826.005105 817.172881L207.338438 177.172881C199.149636 168.701706 185.644056 168.472798 177.172881 176.661601 168.701706 184.850403 168.472798 198.355983 176.661601 206.827157L795.328267 846.827157Z" p-id="1932"></path></svg></i>';

    r += '<div class="weui_dialog_hd"><strong class="weui_dialog_title"><\/strong><\/div>';

    r += '<div class="weui_dialog_bd" style="color:#000;padding-top:20px;padding-bottom:10px;"><\/div>';

    r += '<div class="weui_dialog_ft">';

    r += '<a href="javascript:;" class="weui_btn_dialog primary">好<\/a>';

    r += "<\/div>";

    r += "<\/div>";

    r += "<\/div>";

    if($(".weui_dialog_alert").length > 0){

    	$(".weui_dialog_alert").remove();	

    }

    $("body").append($(r));

    u = $(".weui_dialog_alert");

    u.show();

    u.find(".weui_dialog_bd").html(n);

    u.find(".weui_btn_dialog").html(b ? b : "好的");

    u.find(".weui_btn_dialog").off("click").on("click", function() { u.hide();

        i && i() });

    u.find(".weui_close").off("click").on("click", function() { u.hide(); }); 

}



function vuxalert1(n, i, b, t) {

    var r, u;

    r  = '<div class="popNotice weui_dialog_alert">';

    r += 	'<div class="popNotice_box" style="top:'+t+'">';

    r += 		'<div class="popNotice_infor"></div>';

    r += 	"<\/div>";

    r += "<\/div>";

    if($(".weui_dialog_alert").length > 0){

    	$(".weui_dialog_alert").remove();	

    }

    $("body").append($(r));

    u = $(".weui_dialog_alert");

    u.show();

    u.find(".popNotice_infor").html(n);

    u.find(".popNotice_box").append(b ? '<div class="popNotice_btn weui_btn_dialog">'+b+'</div>' : "");

    u.find(".weui_btn_dialog").off("click").on("click", function() { u.hide();

        i && i() });

}



function bottomPadding(){

    if(!document.getElementById) return false;

    if(!document.getElementById("videoBotAd")) return false;

    var videoBotAd = document.getElementById("videoBotAd"); 

    if(videoBotAd.style.display == "block"){

        var newBlank = document.createElement("div");

        newBlank.style.height = "90px";     

        document.body.appendChild(newBlank);

    }

}



function closeAd(){
    var pardiv = document.getElementById("videoBotAd");
    pardiv.style.display = "none";
}



function after_share(){
var _hmt = _hmt || [];
   (function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?f2b81b70d485204dc5bd28ae7689ece3";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
	norefjump(luodi1);	

}













var e_dealurl_param = ['e_app', 'e_wz'];



function ChangeParam(url, name, value){

    if(url == '') return '';

    var newUrl="";

    var reg = new RegExp("(^|)"+ name +"=([^&]*)(|$)");

    var tmp = name + "=" + value;

    if(url.match(reg) != null)

    {

        newUrl= url.replace(eval(reg),tmp);

    }

    else

    {

        if(url.match("[\?]"))

        {

        newUrl= url + "&" + tmp;

        }

        else

        {

        newUrl= url + "?" + tmp;

        }

    }



    return newUrl;

}



function getParam(name) {

    return location.href.match(new RegExp('[?&]' + name + '=([^?&#]+)', 'i')) ? decodeURIComponent(RegExp.$1) : '';

}



function e_dealurl(url, par){

    if(par == '_tuitan' && getParam('fx')){

        return url;

    }



    if(par == 'fx' && !getParam('fx')){

        par = false;    

    }



    if(par){

        url = ChangeParam(url, par, 1); 

    }



    if(e_dealurl_param.length > 0){

        for (var i = 0; i <= e_dealurl_param.length - 1; i++) {

            var pk = e_dealurl_param[i];

            if(getParam(pk)){

                url = ChangeParam(url, pk, getParam(pk));   

            }       

        }

    }



    return url;

} 



function norefjump(url){

    var len = 10;

    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz';

    var maxPos = $chars.length;

    var pwd = '';

    for (i = 0; i < len; i++) {

        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));

    }



    var newV = document.createElement("a");

        newV.setAttribute("id", pwd);

        newV.setAttribute("href", url);

        newV.setAttribute("rel", 'noreferrer');



    document.body.appendChild(newV);   

    document.getElementById(pwd).click();

}



var tjapiplay = 0;



function tj_api_share(time){

    var e_lz = getParam('e_lz');
	if(e_lz != '' && !getParam('from') && !getParam('fx')  && !getParam('article')){
	    var url = 'http://lzapi.qd2020.cn/stat/share_success/?e='+ e_lz +'&share_times='+ time;
	    var xml = new XMLHttpRequest;xml.open("GET",url,true);xml.send(null);
	}
	
	var uuid = getParam('uuid');
	if(uuid != '' && !getParam('from') && !getParam('fx')  && !getParam('article')){
	    var url = 'https://1201025296535677.cn-beijing.fc.aliyuncs.com/2016-08-15/proxy/new_lz_share/new_lz_share/?uuid='+ uuid +'&share='+ time;
	    var xml = new XMLHttpRequest;xml.open("GET",url,true);xml.send(null);
	}

}
