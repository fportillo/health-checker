#!/usr/bin/env python
import subprocess
print "Content-Type: text/html"
print
print """\
<html>
<body>
<h2>Hello World!</h2>
"""
print "start<br>"
print subprocess.check_output(["/home/francisco.portillo/web/cgi-bin/teste.sh"])
print "end"
print """\
</body>
</html>
"""
