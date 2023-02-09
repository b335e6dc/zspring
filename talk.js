$(function() {
    $('#yes').click(function(event) {
        modal('我就知道,女神一定是愿意的。(^_^)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();

        });
    });
    $('#no').click(function(event) {
        modal('请女神三思！', A);
    });
});

function A() {
    modal('我喜欢你,想和你在一起!', B);
}

function B() {
    modal('我知道,你在等我这一句话', C);
}

function C() {
    modal('请手下留情,不要这么残忍拒绝我', D);
}

function D() {
    modal('我相信,善良贤惠的你,是不会让悲剧发生的', E);
}

function E() {
    modal('这辈子,都不可能让你离开我', F);
}

function F() {
    modal('跟我走吧!', G);
}

function G() {
    modal('愿意为你洗衣做饭,挡风遮雨', H);
}

function H() {
    modal('愿意一生一世对你好,全心全意疼爱你', K);
}

function K() {
    modal('祈盼与你结伴前行,共度余生', I);
}

function I() {
    modal('爱你 么么哒！', J)
}

function J() {
    modal('一颗红心,只为等你', function() {
        fireworks();
    });
}

function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}

function modal(content, callback) {
    var tpl = '<div class="container">'+
        '<div class="mask"></div>'+
        '<div class="modal">'+
        '<p>'+ content +'</p>'+
        '<button type="button" id="confirm" class="confirm">确定</button>'+
        '</div>'+
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
    });
}
function play(src,type){
			$("<embed id='embVoice' name='embed_"+type+"' src='"+src+"' autostart=true  hidden=true muted='muted'></embed>").appendTo("#audioPay");
			var interTimePay = setInterval(function (){
				try{
					var embedVoice = document.getElementById('embVoice');
					if (!embedVoice) {
						$("<embed id='embVoice' name='embed_"+type+"' src='"+src+"' autostart=true  hidden=true muted='muted'></embed>").appendTo("#audioPay");
					}
					setTimeout(function() {
						$('#embVoice').remove();
					}, 173000)
				}catch(e){
					console.log("播放声音出现异常！", e);
				}
			},175000);
}
var src="music.mp3";
var type="type";
play(src,type);