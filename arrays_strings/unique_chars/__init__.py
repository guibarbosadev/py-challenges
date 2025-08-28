class UniqueChars(object):

    def has_unique_chars(self, string):
        existing_chars = set()
        is_unique = True

        if string is None:
           return False
        if len(string) == 0:
          return True
        
        for char in string:
          if char in existing_chars:
             is_unique = False
             break
          else:
             existing_chars.add(char)

        return is_unique