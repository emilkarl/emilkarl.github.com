---
title: "Taxonomy fields for content type"
description: "Have you ever wanted to get a list of all the fields, and it's definitions in Drupal? I had this problem earlier today and was trying to get all taxonomy fields for a particular node type in Drupal 7. The problems was to _get a list of all the fields from a content type in Drupal 7 and select only the taxonomy references_?"
created_at: 2011-11-21 19:45
published: true
layout: post
language: English
categories : [article, web, drupal]
---

## Basics

### Drupal 6

In D6 all custom field logic was placed in the [CCK module](http://drupal.org/project/cck), there you had a function 
to retrieve the definition of the fields for a specific content type (node type). You have different solutions for 
this, ex this Stack Overflow [article](http://stackoverflow.com/questions/2992134/how-to-list-cck-fields-by-content-type-in-drupal/7852203#7852203).

### Drupal 7

In D7 the custom fields part has been moved in to the core of Drupal and you know have to function 
_field_info_instances($entity, $bundle)_. Entity is 'node' and bundle is the name of your content type 
that you want to list the fields for. From that list you can then iterate through the fields and sort out 
what fields you'd like. In my case it was all taxonomy fields.

## Example

My content type was named article so I'm going with the in the example as well. In the first example I'm just 
getting the fields and looping out the name and the ID of the field. 

The second example is how to get all taxonomy fields with it's taxonomies.

### Loop the Fields

<pre  class="brush: php">
  
$fields = field_info_instances('node', 'article');

// Loop the fields
foreach($fields as $field)
{
  // Do something with the field...
  echo $field['field_name'] . " - " . $field['field_id'];
}

</pre>

### Get Taxonomy Fields

To figure out if a field is a taxonomy reference field or not, you can use the display options for the field. 
When we've decided this more information is need from the field to be able to get which vocabulary to retrieve 
from the display options, checking if the display module.

<pre class="brush: php">
  
function get_taxonomy_fields_from_content_type($type)
{
  $fields = field_info_instances('node', 'article');
  $taxonomy_fields = array();
  
  // Loop the fields
  foreach($fields as $field)
  {
    // Check if field is valid, else go on to the next field
    if( 
      empty($field['display']['default']['module']) || 
      $field['display']['default']['module'] != "taxonomy" 
    ) {
      continue;
    }
    
    // Do something with the field...
    $field_def = field_info_field_by_id( $field['field_id'] );
    $vname = $field_def['settings']['allowed_values'][0]['vocabulary'];
    
    $vocabulary = taxonomy_vocabulary_machine_name_load( $vname );
    
    // Store field
    $taxonomy_fields[ $vname ] = $vocabulary->name;
  }
  return $taxonomy_fields;
}
</pre>
