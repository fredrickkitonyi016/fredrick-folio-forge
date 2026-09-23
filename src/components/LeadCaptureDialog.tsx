import { useState, ReactNode } from 'react';
import { z } from 'zod';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle2, Send } from 'lucide-react';

const leadSchema = z.object({
  name: z.string().trim().nonempty({ message: 'Name is required' }).max(100, { message: 'Name must be under 100 characters' }),
  email: z.string().trim().email({ message: 'Enter a valid email address' }).max(255, { message: 'Email must be under 255 characters' }),
  organization: z.string().trim().max(120, { message: 'Organization must be under 120 characters' }).optional(),
  role: z.string().trim().max(120, { message: 'Role must be under 120 characters' }).optional(),
  message: z.string().trim().max(1000, { message: 'Message must be under 1000 characters' }).optional(),
});

type LeadErrors = Partial<Record<keyof z.infer<typeof leadSchema>, string>>;

interface LeadCaptureDialogProps {
  trigger: ReactNode;
  title: string;
  description: string;
  requestType: string;
  submitLabel?: string;
}

const LeadCaptureDialog = ({
  trigger,
  title,
  description,
  requestType,
  submitLabel = 'Submit Request',
}: LeadCaptureDialogProps) => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<LeadErrors>({});
  const [form, setForm] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    message: '',
  });

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) {
      setSubmitted(false);
      setErrors({});
      setForm({ name: '', email: '', organization: '', role: '', message: '' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = leadSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors: LeadErrors = {};
      result.error.errors.forEach((err) => {
        const key = err.path[0] as keyof LeadErrors;
        if (!fieldErrors[key]) fieldErrors[key] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    const data = result.data;
    const body = encodeURIComponent(
      `Request: ${requestType}\n\nName: ${data.name}\nEmail: ${data.email}\nOrganization: ${data.organization || 'N/A'}\nRole: ${data.role || 'N/A'}\n\n${data.message || ''}`
    );
    window.open(
      `mailto:frimattechnologies016@gmail.com?subject=${encodeURIComponent(requestType)}&body=${body}`,
      '_self'
    );

    setSubmitted(true);
    toast({
      title: 'Request received',
      description: `Your request for "${requestType}" has been prepared. I will respond personally.`,
    });
  };

  const setField = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto border-secondary/30">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-foreground">{title}</DialogTitle>
          <DialogDescription className="font-sans">{description}</DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <CheckCircle2 className="w-14 h-14 text-secondary mx-auto" />
            <h4 className="text-xl font-serif font-bold text-foreground">Request Prepared</h4>
            <p className="text-sm text-muted-foreground font-sans max-w-sm mx-auto">
              Thank you, {form.name.split(' ')[0]}. Your email app has opened with your request. Please send it to complete your submission. A reply will be sent to {form.email} shortly.
            </p>
            <Button
              variant="outline"
              className="border-secondary/50 hover:bg-secondary hover:text-secondary-foreground"
              onClick={() => handleOpenChange(false)}
            >
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="lead-name">Full Name *</Label>
              <Input id="lead-name" value={form.name} onChange={setField('name')} maxLength={100} placeholder="Jane Mwende" />
              {errors.name && <p className="text-xs text-destructive font-sans">{errors.name}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="lead-email">Work Email *</Label>
              <Input id="lead-email" type="email" value={form.email} onChange={setField('email')} maxLength={255} placeholder="jane@company.com" />
              {errors.email && <p className="text-xs text-destructive font-sans">{errors.email}</p>}
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="lead-org">Organization</Label>
                <Input id="lead-org" value={form.organization} onChange={setField('organization')} maxLength={120} placeholder="Acme Group" />
                {errors.organization && <p className="text-xs text-destructive font-sans">{errors.organization}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lead-role">Role / Title</Label>
                <Input id="lead-role" value={form.role} onChange={setField('role')} maxLength={120} placeholder="CTO" />
                {errors.role && <p className="text-xs text-destructive font-sans">{errors.role}</p>}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="lead-message">Anything I should know?</Label>
              <Textarea id="lead-message" rows={3} value={form.message} onChange={setField('message')} maxLength={1000} placeholder="Context on your priorities or challenges..." />
              {errors.message && <p className="text-xs text-destructive font-sans">{errors.message}</p>}
            </div>
            <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
              <Send className="w-4 h-4 mr-2" />
              {submitLabel}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LeadCaptureDialog;
