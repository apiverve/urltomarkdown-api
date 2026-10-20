from setuptools import setup, find_packages

setup(
    name='apiverve_urltomarkdown',
    version='1.2.2',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='URL to Markdown converts any webpage URL into structured Markdown text. Each response delivers the page title, converted text, word count, and element counts, with paid plans adding optional link and image syntax.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/urltomarkdown?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
