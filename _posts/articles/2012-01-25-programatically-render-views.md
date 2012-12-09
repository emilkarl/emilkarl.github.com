---
title: "Programmatically render Views with applied exposed form in Drupal 7"
description: "Some time ago I was developing a project were I needed to programmatically render Views with an exposed form Drupal 7. I wanted to render the view with a hidden exposed form but skip that form and only use it to be able to render the view result but send in my own values for the filters. This article will show you how you can do it. Note that this is only an example and probably not the perfect use case for doing this with custom code."
created_at: 2012-12-07 19:45
published: true
layout: application
language: English
categories : [article,web,drupal]
---

Some time ago I was developing a project were I needed to programmatically render [Views](http://drupal.org/project/views) with an exposed form [Drupal 7](http://Drupal.org). I wanted to render the view with a hidden exposed form but skip that form and only use it to be able to render the view result but send in my own values for the filters. This article will show you how you can do it. Note that this is only an example and probably not the perfect use case for doing this with custom code.

## Create a view

Start off with a new Block View, I called mine _myexampleview_. I set up some filters, I want to only display published articles. Then I add an exposed filter for the category field that I call category_tid. Category is a term reference field I’ve created. I mark this filter as exposed and set it's field name. The field name will be used later.

In the advanced tab I select that I will _Use Ajax_. This in important is this allows us to override the filter values.
I will also set the view name to something good, articles_by_category.

The view is done and I will go back to the code. I will just render this view in my page.tpl.php template.

## The code

We have our view ready on now we're going to the rendering part. I set my own customized filter array calling the 

<code>$filter_fields = array('category_tid' => '5');
$custom_view = views_get_view('myexampleview');
$custom_view->set_exposed_input($filter_fields);
$custom_view->render('articles_by_category')</code>

You will also need to hide the exposed filter form for the form.

<code>.view-id-myexampleview .view-filters { display: none; }</code>

This all you need. Now you can modify this as you like and skip the regular exposed form.