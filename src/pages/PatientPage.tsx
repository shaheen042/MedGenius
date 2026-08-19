import React, { useState } from 'react';
import { 
  Calendar, 
  FileText, 
  Video, 
  Brain, 
  Heart,
  Clock,
  Star,
  Send,
  Phone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/Header';

const mockRecords = [
  { 
    id: 1, 
    date: '2024-01-20', 
    doctor: 'Dr. Sarah Johnson', 
    type: 'Consultation', 
    diagnosis: 'Routine Checkup',
    notes: 'Patient in good health, blood pressure normal'
  },
  { 
    id: 2, 
    date: '2024-01-15', 
    doctor: 'Dr. Emily Rodriguez', 
    type: 'Lab Results', 
    diagnosis: 'Blood Work',
    notes: 'All lab values within normal range'
  },
  { 
    id: 3, 
    date: '2024-01-10', 
    doctor: 'Dr. Mike Thompson', 
    type: 'Prescription', 
    diagnosis: 'Allergy Treatment',
    notes: 'Prescribed antihistamine for seasonal allergies'
  },
];

const mockDoctors = [
  { id: 1, name: 'Dr. Sarah Johnson', specialty: 'General Practice', rating: 4.9, available: true },
  { id: 2, name: 'Dr. Emily Rodriguez', specialty: 'Cardiology', rating: 4.8, available: false },
  { id: 3, name: 'Dr. Mike Thompson', specialty: 'Dermatology', rating: 4.7, available: true },
  { id: 4, name: 'Dr. Lisa Chen', specialty: 'Pediatrics', rating: 4.9, available: true },
];

const PatientPage = () => {
  const [symptoms, setSymptoms] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyzeSymptoms = async () => {
    if (!symptoms.trim()) return;
    
    setIsAnalyzing(true);
    // Simulate AI processing
    setTimeout(() => {
      setAiResponse(`Based on your symptoms: "${symptoms}", this could indicate:
      
1. **Common Cold** (Likelihood: High)
   - Rest and stay hydrated
   - Over-the-counter pain relievers may help
   
2. **Seasonal Allergies** (Likelihood: Medium)
   - Avoid known allergens
   - Consider antihistamines

**Recommendation:** If symptoms persist for more than 3 days or worsen, please consult with a healthcare professional.

*This is not a medical diagnosis. Always consult with a qualified healthcare provider for proper medical advice.*`);
      setIsAnalyzing(false);
    }, 2000);
  };

  const stats = [
    { title: 'Appointments', value: '12', icon: Calendar, color: 'primary' },
    { title: 'Health Records', value: '45', icon: FileText, color: 'success' },
    { title: 'Video Calls', value: '8', icon: Video, color: 'accent' },
    { title: 'Health Score', value: '95%', icon: Heart, color: 'warning' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      <Header />
      
      <div className="container max-w-screen-2xl mx-auto p-6">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Patient Dashboard</h1>
          <p className="text-muted-foreground">Manage your health and connect with healthcare providers</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.title} className="bg-gradient-card shadow-card border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg bg-${stat.color}/10`}>
                    <stat.icon className={`h-6 w-6 text-${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* AI Symptom Checker */}
          <Card className="bg-gradient-card shadow-medical border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-6 w-6 text-primary" />
                AI Symptom Checker
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Describe your symptoms
                </label>
                <Textarea
                  placeholder="Please describe what you're experiencing... (e.g., headache, fever, cough)"
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  className="min-h-20"
                />
              </div>
              <Button 
                variant="medical" 
                onClick={analyzeSymptoms}
                disabled={!symptoms.trim() || isAnalyzing}
                className="w-full flex items-center gap-2"
              >
                {isAnalyzing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Analyze Symptoms
                  </>
                )}
              </Button>
              
              {aiResponse && (
                <div className="bg-muted/50 p-4 rounded-lg border border-border/50">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Brain className="h-4 w-4 text-primary" />
                    AI Analysis Results
                  </h4>
                  <div className="text-sm text-foreground whitespace-pre-line">
                    {aiResponse}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Book Consultation */}
          <Card className="bg-gradient-card shadow-medical border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-6 w-6 text-primary" />
                Available Doctors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockDoctors.map((doctor) => (
                  <div key={doctor.id} className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border/50">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-foreground">{doctor.name}</h4>
                        <Badge variant={doctor.available ? 'default' : 'secondary'}>
                          {doctor.available ? 'Available' : 'Busy'}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs text-muted-foreground">{doctor.rating}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button 
                        variant={doctor.available ? "medical" : "outline"} 
                        size="sm"
                        disabled={!doctor.available}
                        className="flex items-center gap-2"
                      >
                        <Video className="h-4 w-4" />
                        {doctor.available ? 'Book' : 'Unavailable'}
                      </Button>
                      {doctor.available && (
                        <Button variant="outline" size="sm" className="flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          Call
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Health Records */}
        <Card className="bg-gradient-card shadow-medical border-0">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-6 w-6 text-primary" />
                My Health Records
              </CardTitle>
              <Button variant="outline" size="sm">
                Sync Records
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockRecords.map((record) => (
                <div key={record.id} className="flex items-start justify-between p-4 bg-background/50 rounded-lg border border-border/50">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="font-semibold text-foreground">{record.diagnosis}</div>
                      <Badge variant="outline">{record.type}</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-4">
                        <span>{record.doctor}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {record.date}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-foreground">{record.notes}</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    View Details
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card className="bg-gradient-card shadow-card border-0">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Book Appointment</h3>
                  <p className="text-sm text-muted-foreground">Schedule with a doctor</p>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                Schedule Now
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card border-0">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-success/10">
                  <Heart className="h-6 w-6 text-success" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Health Tracker</h3>
                  <p className="text-sm text-muted-foreground">Monitor vital signs</p>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                Track Health
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card border-0">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <FileText className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Prescriptions</h3>
                  <p className="text-sm text-muted-foreground">View active medications</p>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                View Prescriptions
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PatientPage;