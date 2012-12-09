---
title: "Custom domains in PHP"
description: "A lot of new services out there use custom domains. Making people not only personalize there place on the service with themes, content colors etc but also with domain names is something..."
created_at: 2012-12-07 19:45
published: true
layout: post
language: English
categories : [article, web, php]
---

### PHP Sample Code

<code>
function domain_lookup(){
  $domain = $_SERVER['HTTP_HOST'];
  $user = user_specified_domain($domain);

  if($user){
    # You got the user, display it's page!
    return "YES! :) -> show users page";
  } else {
    # Redirect where ever you want (404?) Custom domain pointed but not specifed in DB
    return "NO! :( -> 404";
  }
}

function user_specified_domain($domain = NULL){
  if(empty($domain))
    return FALSE;

  # @todo: Make a db request here, now hardcoded
  # Key = users specified domain
  # Value = 
  # Example query: "SELECT id, custom_domain FROM users WHERE custom_domain = '$domain' AND status = 1";
  # !!! Watch out for SQL injections !!!
  $available_domains = array('emildev.com' => 1, 'skrivrdev.com' => 2);

  return ! empty($available_domains[$domain]) ? "Retrieve and return user from ID" : FALSE;
}
</code>