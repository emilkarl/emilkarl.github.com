---
title: "How to add Disqus to your Skrivr theme"
description: 'Yesterday a question on how to add [Disqus](http://disqus.com) to your [Skrivr](http://skrivr.com) page. It's a real simple process that I thought I could share with you.'
created_at: 2012-01-08 19:45
published: true
layout: application
language: English
categories : [article,web,skrivr]
---

Yesterday a question on how to add [Disqus](http://disqus.com) to your [Skrivr](http://skrivr.com) page. It's a real simple process that I thought I could share with you. 

## Dropbox and Themes

First of all you need a Skrivr account connected to your [Dropbox](http://dropbox.com), I have mine hooked up to:

<code>~/Dropbox/skrivr/</code>

When you have your Skrivr and Dropbox account connected, you can go to _http://skrivr.com/{you-skrivr-name}/settings_ and download a theme to your computer. Let's say you want to use the _Skrivr theme_. After downloading the theme, unzip and place it in the _templates_ folder in the skrivr folder on your Dropbox, in my case:

<code>~/Dropbox/skrivr/templates/skrivr\_default\_theme/</code>

_Note that you can rename your theme folder to match your own name if you'd like._ 

You can read more about Skrivr settings and themes in the [Themes & settings post](http://skrivr.com/blog/static/1-try-out-themes-and-update-settings) and [Custom Themes post](http://skrivr.com/blog/static/3-create-a-custom-theme) on the [Skrivr blog](http://skrivr.com/blog).

## Disqus

To enable Disqus for your theme/account you need an account on Disqus, you can get one [here](http://disqus.com/admin/register/).

When setting up your Disqus account you will be able to fill in the info for your first website in the same time. Just go head a fill in whatever matches your Skrivr. 

For me it was


 * Site URL: *http://skrivr.com/emil*
 * Site Name: *emilkarl*
 * Site Shortname: *emilkarlskrivr*
 
Then fill in your account details and go to step 2 in the register process, customize as you like. When you are done continue on to Step 3, _Install_.

In Step 3, select the option "Universal Code". You'll be directed to a page where you can find the _embed code_. Select the contents of the embed code and copy it to your clipboard. 

## Adding Disqus to the theme

Now, you have the embed code and we can get back to the Skrivr templates folder on your Dropbox. Open up the file 

<code>~/Dropbox/skrivr/templates/skrivr\_default\_theme\_/article.html</code>

The article file is the template for a signle post/static page. In this file add the embed code under *body|raw* tag. and insert your disqus shortname for your skrivr site. Then you are all set and Disqus comments will show up in your posts.

<pre class="brush: js">
  
  {{ body|raw }}
  
  &lt;div id="disqus_thread"&gt;&lt;/div&gt;
  
  &lt;script type="text/javascript"&gt;
      /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
      var disqus_shortname = 'emilkarlskrivr'; // required: replace example with your forum shortname

      /* * * DON'T EDIT BELOW THIS LINE * * */
      (function() {
          var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
          dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
          (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
      })();
  &lt;/script&gt;
  
  <noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
  <a href="http://disqus.com" class="dsq-brlink">blog comments powered by <span class="logo-disqus">Disqus</span></a>
  
</pre>

## Clean up the code

In my template I've wrapped the comments form in another div called #comments and I have removed the no-script and Disqus links in the bottom.

<pre class="brush: js">
  
  {{ body|raw }}
  
  &lt;div id="comments"&gt;
    
    &lt;div id="disqus_thread"&gt;&lt;/div&gt;
    
    &lt;script type="text/javascript"&gt;
    
      var disqus_shortname = 'emilkarlskrivr';
      
      (function() {
          var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
          dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
          (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
      })();
    &lt;/script&gt;
    
  &lt;/div&gt;
  
</pre>

## Only for posts, not static

As the article.html is the one file that's used to display both single post pages and static pages I've taken advantage of the body-classes added earlier this month. In my header.html file in the theme directory I've modified the body-tag to include classes for page-type and category. This is real easy if you havent already added it.

<pre class="brush: css">
  &lt;body class="{{ body_class }}"&gt;
</pre>


Now I can hide the comments-div when on static pages by adding this line of CSS to the themes CSS-file located in:

<code>~/Dropbox/skrivr/templates/skrivr\_default\_\_theme\_/css/style.css</code>


Remember to include the style, not in the media-query part of the CSS, but above the line for the first media-query.

<pre  class="brush: css">

.static #comments {
  display: none;
}

</pre>


_Sorry for my bad english, working on it... :)_