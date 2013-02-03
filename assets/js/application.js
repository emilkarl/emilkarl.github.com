$(document).ready(function(){
  $('.nav-toggle').on('click',function(){
    $('.hf-wrapper header').toggleClass('nav-active');
  });
  
  if($('.bucket-items-total').length > 0){
    $('.bucket-items-total').html($('article li').length);
    $('.bucket-items-completed').html($('article li.complete').length);
  }
});

var el = document.getElementById('disqus_show');
var disqusShowing = false;
var disqusShortname = 'skrivremilkarl';
var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
dsq.src = 'http://' + disqusShortname + '.disqus.com/embed.js';

function expandDisqus() {
	disqusShowing = true;
	(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
	el.parentNode.removeChild(el);
}

if(el !== undefined && el !== null) {
	el.addEventListener('click', expandDisqus, false);
}

window.onscroll = function () {
	if (! disqusShowing && (window.innerHeight + window.scrollY) >= (document.height - 300)) {
		expandDisqus();
	}
};