# Write a regular expression to match strings containing both "Odoo" and "#rules" in any order.

import re

txt = "Ohoo and #rules"
# regex = "Ohoo|#rules"
regex = "^(?=.*\bOhoo\b)(?=.*\brules\b).*$"
find = re.match(regex, txt)

print find
