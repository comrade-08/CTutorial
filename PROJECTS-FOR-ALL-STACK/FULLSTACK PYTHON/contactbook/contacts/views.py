from django.shortcuts import render, get_object_or_404, redirect
from django.contrib import messages
from .models import Contact
from .forms import ContactForm

def contact_list(request):
    contacts = Contact.objects.all().order_by('name')
    return render(request, 'contacts/contact_list.html', {'contacts': contacts})

def contact_detail(request, pk):
    contact = get_object_or_404(Contact, pk=pk)
    return render(request, 'contacts/contact_detail.html', {'contact': contact})

def contact_create(request):
    if request.method == "POST":
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, "Contact added successfully!")
            return redirect('contact_list')
    else:
        form = ContactForm()
    return render(request, 'contacts/contact_form.html', {'form': form, 'title': 'Add New Contact'})

def contact_update(request, pk):
    contact = get_object_or_404(Contact, pk=pk)
    if request.method == "POST":
        form = ContactForm(request.POST, instance=contact)
        if form.is_valid():
            form.save()
            messages.success(request, "Contact updated successfully!")
            return redirect('contact_list')
    else:
        form = ContactForm(instance=contact)
    return render(request, 'contacts/contact_form.html', {'form': form, 'title': 'Edit Contact'})

def contact_delete(request, pk):
    contact = get_object_or_404(Contact, pk=pk)
    if request.method == "POST":
        contact.delete()
        messages.warning(request, "Contact deleted.")
        return redirect('contact_list')
    return render(request, 'contacts/contact_delete.html', {'contact': contact})
