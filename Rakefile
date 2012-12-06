desc 'deploy to github'
task :deploy do
  # uploads ALL files b/c I often do site-wide changes and prefer overwriting all
  puts 'deploying'
  sh "git add . && git commit -a -m 'Adding new content' && git push"
  puts 'done!'
end

desc 'create new post or bit. args: type (post, bit), title, future (# of days)'
# rake new future=0 title="New post title goes here" slug="slug-override-title"
task :new do
  require 'rubygems'
  require 'chronic'
  require 'stringex'
  require 'active_support'

  title = ENV["title"] || "New Title"
  future = ENV["future"] || 0
  slug = (ENV["slug"] ? ENV["slug"].gsub(' ','-').downcase : nil) || title.gsub(' ','-').downcase

  slug.gsub! /\s*[^A-Za-z0-9\.\-]\s*/, '_'  
  #convert double underscores to single
  slug.gsub! /_+/,"_"
  #strip off leading/trailing underscore
  slug.gsub! /\A[_\.]+|[_\.]+\z/,""
  slug.to_url

  category = ENV["category"] || "article"
  target = ActiveSupport::Inflector.pluralize(category)
  TARGET_DIR = "_posts/#{target}"

  if ! (File.exists?(TARGET_DIR)) then
    Dir.mkdir(TARGET_DIR)
  end

  filename = "#{Time.new.strftime('%Y-%m-%d')}-#{slug}.md"

  path = File.join(TARGET_DIR, filename)
  puts "Creating new post: #{filename}"
  post = <<-HTML
--- 
layout: post
title: 'TITLE'
description: 'DESCRIPTION'
created_at: "#{Time.now.strftime("%Y-%m-%d %H:%M")}"
published: false
categories : [#{category}]
---


HTML
  post.gsub!('TITLE', title).gsub!('DATE', Time.new.to_s)
  File.open(path, 'w') do |file|
    file.puts post
  end
  puts "new #{category} generated in #{path}"
  #system "subl #{path}"
  system "/Applications/Mou.app/Contents/MacOS/Mou #{path} &"
end


# https://github.com/meskyanichi/nanoc-heroku/blob/master/Rakefile
##
# A couple of rake tasks that'll optimize JPG, PNG, JavaScripts and Stylesheet files
#
namespace :optimize do
  ##
  # Package Requirement:
  #  jpegoptim
  # Install OSX:
  #  brew install jpegoptim
  # Install Ubuntu:
  #  [apt-get | aptitude] install jpegoptim
  #
  desc 'Optimize JPG images in output/images directory using jpegoptim'
  task :jpg do
    puts `find assets/images -name '*.jpg' -exec jpegoptim {} \\;`
  end

  ##
  # Package Requirement:
  #  optipng
  # Install OSX:
  #  brew install optipng
  # Install Ubuntu:
  #  [apt-get | aptitude] install optipng
  #
  desc 'Optimize PNG images in output/images directory using optipng'
  task :png do
    puts `find assets/images -name '*.png' -exec optipng {} \\;`
  end

  ##
  # Convenient task for performing all optimization techniques at once
  #
  desc 'Optimize all JPG, PNG, Stylesheet and JavaScript files in the output directory'
  task :all => [:jpg, :png]
end

