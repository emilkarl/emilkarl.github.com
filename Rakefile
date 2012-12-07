desc 'deploy to github'
task :deploy do
  # uploads ALL files b/c I often do site-wide changes and prefer overwriting all
  puts 'deploying'
  sh "git add . && git commit -a -m 'Adding new content' && git push"
  puts 'done!'
end

rule '.css' => ['.scss'] do |t|
  sh %{ sass -t compressed #{t.source} #{t.name} }
end

rule '.html' => ['.haml'] do |t|
  sh %{ haml -E utf-8 #{t.source} #{t.name.sub(/_haml\./,'.')} }
end