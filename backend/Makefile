# Makefile

VENV = venv
ACTIVATE = . $(VENV)/bin/activate

venv:
	python3 -m venv $(VENV)
	$(ACTIVATE) && pip install -r requirements.txt

run:
	$(ACTIVATE) && uvicorn main:app --reload --port 3141

clear:
	rm -rf $(VENV)
